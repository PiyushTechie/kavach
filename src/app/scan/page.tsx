"use client";
import { useState } from "react";
import ScannerTabs from "../../components/ScannerTabs";
import ScannerInput from "../../components/ScannerInput";
import ScannerResult from "../../components/ScannerResult";
import { db } from "../../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import jsQR from "jsqr";

type TabType = "url" | "text" | "image" | "audio";

export default function ScanDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("url");
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const [status, setStatus] = useState(""); 
  const [verdict, setVerdict] = useState("");
  const [reason, setReason] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const [shareToLedger, setShareToLedger] = useState(false);

  const isThreatDetected = status.includes("THREAT") || verdict.includes("Threat") || verdict.includes("Scam");

  const handleTabSwitch = (tab: TabType) => {
    setActiveTab(tab);
    setInputValue("");
    setSelectedFile(null);
    setStatus("");
    setVerdict("");
    setReason("");
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const extractQRCode = (file: File): Promise<string | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d', { willReadFrequently: true });
          if (!context) return resolve(null);
          
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0, img.width, img.height);
          
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          
          if (code && code.data) {
            resolve(code.data); 
          } else {
            resolve(null); 
          }
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  const runScan = async () => {
    const isFileTab = activeTab === "image" || activeTab === "audio";
    if (!isFileTab && !inputValue.trim()) return;
    if (isFileTab && !selectedFile) return;
    
    setIsLoading(true);
    setStatus("");
    setVerdict("");
    setReason("");
    
    try {
      let scanData: any = null; 

      if (activeTab === "url") {
        const response = await fetch("/api/scan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: inputValue }),
        });
        if (!response.ok) throw new Error("Server error");
        scanData = await response.json(); 
        
        setStatus(scanData.verdict === "Safe" ? "VERIFIED SECURE" : "CRITICAL THREAT");
        setVerdict(scanData.verdict === "Safe" ? "Secure Link" : "Malicious URL Detected");

      } else if (activeTab === "text") {
        const response = await fetch("/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: inputValue }),
        });
        if (!response.ok) throw new Error("Server error");
        scanData = await response.json();
        
        setStatus(scanData.verdict.includes("Safe") ? "VERIFIED SECURE" : "CRITICAL THREAT");
        setVerdict(scanData.verdict.includes("Safe") ? "Safe Content" : "Social Engineering Detected");
        setReason(scanData.reason);

      } else if (activeTab === "image" && selectedFile) {
        const hiddenUrl = await extractQRCode(selectedFile);

        if (hiddenUrl) {
          setStatus("ANALYZING QR PAYLOAD...");
          setReason(`Intercepted hidden destination...`);
          
          const response = await fetch("/api/scan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: hiddenUrl }),
          });
          if (!response.ok) throw new Error("Server error");
          scanData = await response.json();
          
          setStatus(scanData.verdict === "Safe" ? "VERIFIED SECURE" : "CRITICAL THREAT");
          setVerdict(scanData.verdict === "Safe" ? "Safe QR Code" : "Malicious QR Payload");
          setReason(`Extracted URL: ${hiddenUrl}. ${scanData.reason || ""}`);

        } else {
          const base64Data = await fileToBase64(selectedFile);
          const response = await fetch("/api/analyze-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ imageBase64: base64Data, mimeType: selectedFile.type }),
          });
          if (!response.ok) throw new Error("Server error");
          scanData = await response.json();
          
          setStatus(scanData.verdict.includes("Safe") ? "VERIFIED SECURE" : "CRITICAL THREAT");
          setVerdict(scanData.verdict.includes("Safe") ? "Authentic Media" : "Manipulated Media Detected");
          setReason(scanData.reason);
        }
        
      } else if (activeTab === "audio" && selectedFile) {
        const base64Data = await fileToBase64(selectedFile);
        const response = await fetch("/api/analyze-audio", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ audioBase64: base64Data, mimeType: selectedFile.type }),
        });
        if (!response.ok) throw new Error("Server error");
        scanData = await response.json();
        
        setStatus(scanData.verdict.includes("Safe") ? "VERIFIED SECURE" : "CRITICAL THREAT");
        setVerdict(scanData.verdict.includes("Safe") ? "Authentic Audio" : "AI Deepfake/Vishing Detected");
        setReason(scanData.reason);
      }

      if (scanData) {
        const isDangerous = scanData.status?.toUpperCase() === "THREAT" || scanData.verdict?.toUpperCase().includes("THREAT") || scanData.verdict?.toUpperCase().includes("SCAM");
        
        if (isDangerous && shareToLedger) {
          try {
            await addDoc(collection(db, "threats"), {
              type: activeTab,
              content: activeTab === "image" || activeTab === "audio" ? "Media File Analyzed" : inputValue.substring(0, 100) + "...",
              verdict: scanData.verdict,
              reason: scanData.reason || "Threat detected by AI.",
              timestamp: serverTimestamp(),
            });
          } catch (dbError) {
            console.error(dbError);
          }
        }
      }

    } catch (error: any) {
      if (error.status === 429 || (error.message && error.message.includes("429"))) {
        setStatus("SYSTEM OVERLOAD");
        setVerdict("Scanner Cooling Down");
        setReason("Our AI is analyzing a high volume of threats right now. Please wait about 60 seconds and try scanning again.");
      } else {
        setStatus("ERROR");
        setVerdict("Connection Error");
        setReason(error.message || "Could not connect to the scanning server.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getButtonText = () => {
    if (activeTab === "url") return "Analyze Link Integrity";
    if (activeTab === "text") return "Analyze Message Pattern";
    if (activeTab === "image") return "Inspect Visual Forensics";
    return "Scan Audio Signature";
  };

  const isFileTab = activeTab === "image" || activeTab === "audio";

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-6 pt-36 md:pt-48 pb-24 bg-slate-50 min-h-screen transition-colors duration-500">
      <div 
        className={`w-full max-w-lg p-8 rounded-3xl transition-all duration-700 ease-out border ${
          isThreatDetected 
            ? "bg-slate-950 border-red-500/50 shadow-[0_0_50px_rgba(220,38,38,0.25)]" 
            : "bg-white shadow-xl border-slate-200"
        }`}
      >
        <h1 className={`text-3xl font-extrabold mb-2 text-center transition-colors duration-500 ${isThreatDetected ? "text-white" : "text-slate-900"}`}>
          Security Scanner
        </h1>
        <p className={`mb-8 text-center text-sm transition-colors duration-500 ${isThreatDetected ? "text-red-400" : "text-slate-500"}`}>
          Powered by Google Safe Browsing & Gemini Vision AI
        </p>

        <div className={isThreatDetected ? "opacity-50 pointer-events-none transition-opacity duration-500" : "transition-opacity duration-500"}>
          <ScannerTabs activeTab={activeTab} onTabSwitch={handleTabSwitch} />
        </div>
        
        <div className={`transition-all duration-500 ${isThreatDetected ? "hidden" : "block"}`}>
          <ScannerInput 
            activeTab={activeTab} 
            inputValue={inputValue} 
            setInputValue={setInputValue} 
            selectedFile={selectedFile} 
            setSelectedFile={setSelectedFile} 
            isLoading={isLoading} 
            onLiveScanSuccess={(url) => {
              handleTabSwitch("url");
              setInputValue(url);
            }}
          />

          <div className="flex items-center mb-6 mt-2 px-1">
            <input
              type="checkbox"
              id="ledger-consent"
              checked={shareToLedger}
              onChange={(e) => setShareToLedger(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="ledger-consent" className="ml-2 text-sm text-slate-600 cursor-pointer select-none">
              Anonymously share to Community Ledger
            </label>
          </div>

          <button
            onClick={runScan}
            disabled={isLoading || (!isFileTab && !inputValue.trim()) || (isFileTab && !selectedFile)}
            className="w-full flex justify-center items-center bg-blue-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-md disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
          >
            {isLoading ? "Running Security Protocol..." : getButtonText()}
          </button>
        </div>

        <div className={`transition-all duration-700 ${isThreatDetected ? "mt-4 scale-100 opacity-100" : "scale-95 opacity-90"}`}>
          <ScannerResult status={status} verdict={verdict} reason={reason} />
        </div>
        
        {isThreatDetected && (
          <button
            onClick={() => handleTabSwitch("url")}
            className="w-full mt-6 bg-transparent border border-red-500/30 text-red-400 hover:bg-red-500/10 text-sm font-bold py-3 rounded-xl transition"
          >
            Run Another Scan
          </button>
        )}
      </div>
    </div>
  );
}