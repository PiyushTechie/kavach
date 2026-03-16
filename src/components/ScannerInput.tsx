import { ChangeEvent, useState } from "react";
import LiveCameraScanner from "./LiveCameraScanner";

type TabType = "url" | "text" | "image" | "audio";

interface ScannerInputProps {
  activeTab: TabType;
  inputValue: string;
  setInputValue: (val: string) => void;
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  isLoading: boolean;
  onLiveScanSuccess?: (url: string) => void; 
}

export default function ScannerInput({ 
  activeTab, 
  inputValue, 
  setInputValue, 
  selectedFile, 
  setSelectedFile, 
  isLoading,
  onLiveScanSuccess 
}: ScannerInputProps) {
  
  const [showCamera, setShowCamera] = useState(false);

  if (activeTab === "url") {
    return (
      <input 
        type="url" 
        placeholder="https://example.com" 
        className="w-full p-4 mb-6 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        disabled={isLoading} 
      />
    );
  }

  if (activeTab === "text") {
    return (
      <textarea 
        placeholder="Paste a suspicious SMS, WhatsApp forward, or email here..." 
        className="w-full p-4 mb-6 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none transition" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        disabled={isLoading} 
      />
    );
  }

  const isFileTab = activeTab === "image" || activeTab === "audio";
  const acceptedTypes = activeTab === "image" ? "image/*" : "audio/*";
  const fileDescription = activeTab === "image" ? "PNG, JPG, or WEBP" : "MP3, WAV, or OGG";

  if (isFileTab) {
    if (activeTab === "image" && showCamera) {
      return (
        <div className="mb-6 w-full">
          <LiveCameraScanner 
            onScanSuccess={(url) => {
              setShowCamera(false);
              if (onLiveScanSuccess) onLiveScanSuccess(url); 
            }} 
            onCancel={() => setShowCamera(false)} 
          />
        </div>
      );
    }

    return (
      <div className="mb-6 w-full">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-2 text-sm text-slate-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-slate-500">{fileDescription}</p>
          </div>
          <input 
            type="file" 
            accept={acceptedTypes} 
            className="hidden" 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedFile(e.target.files?.[0] || null)} 
            disabled={isLoading} 
          />
        </label>
        {selectedFile && <p className="text-sm text-center mt-2 text-slate-600 font-medium">Selected: {selectedFile.name}</p>}
        
        {activeTab === "image" && (
          <div className="mt-4 flex items-center justify-between px-2">
            <span className="text-sm text-slate-500 font-medium">Scanning a physical QR code?</span>
            <button 
              onClick={() => setShowCamera(true)}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-lg hover:bg-blue-100 transition shadow-sm"
            >
              📸 Open Camera
            </button>
          </div>
        )}
      </div>
    );
  }
  
  return null;
}