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
        className="w-full p-4 mb-6 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500/50 transition-colors duration-300" 
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
        className="w-full p-4 mb-6 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500/50 h-32 resize-none transition-colors duration-300" 
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
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 dark:border-slate-700 border-dashed rounded-lg cursor-pointer bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-2 text-sm text-slate-500 dark:text-slate-400"><span className="font-semibold text-slate-700 dark:text-slate-300">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-slate-500 dark:text-slate-500">{fileDescription}</p>
          </div>
          <input 
            type="file" 
            accept={acceptedTypes} 
            className="hidden" 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedFile(e.target.files?.[0] || null)} 
            disabled={isLoading} 
          />
        </label>
        {selectedFile && <p className="text-sm text-center mt-2 text-slate-600 dark:text-slate-300 font-medium">Selected: {selectedFile.name}</p>}
        
        {activeTab === "image" && (
          <div className="mt-4 flex items-center justify-between px-2">
            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Scanning a physical QR code?</span>
            <button 
              onClick={() => setShowCamera(true)}
              disabled={isLoading}
              className="px-4 py-2 flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-bold rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-300 shadow-sm cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
              </svg>
              Open Camera
            </button>
          </div>
        )}
      </div>
    );
  }
  
  return null;
}