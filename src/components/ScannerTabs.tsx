type TabType = "url" | "text" | "image" | "audio";

interface ScannerTabsProps {
  activeTab: TabType;
  onTabSwitch: (tab: TabType) => void;
}

export default function ScannerTabs({ activeTab, onTabSwitch }: ScannerTabsProps) {
  return (
    <div className="flex bg-slate-100 p-1 rounded-lg mb-6 text-sm overflow-x-auto">
      <button 
        onClick={() => onTabSwitch("url")} 
        className={`flex-1 min-w-[80px] py-2 font-semibold rounded-md transition ${activeTab === "url" ? "bg-white shadow-sm text-blue-600" : "text-slate-500 hover:text-slate-700"}`}
      >
        Link
      </button>
      <button 
        onClick={() => onTabSwitch("text")} 
        className={`flex-1 min-w-[80px] py-2 font-semibold rounded-md transition ${activeTab === "text" ? "bg-white shadow-sm text-blue-600" : "text-slate-500 hover:text-slate-700"}`}
      >
        Message
      </button>
      <button 
        onClick={() => onTabSwitch("image")} 
        className={`flex-1 min-w-[80px] py-2 font-semibold rounded-md transition ${activeTab === "image" ? "bg-white shadow-sm text-blue-600" : "text-slate-500 hover:text-slate-700"}`}
      >
        Screenshot
      </button>
      <button 
        onClick={() => onTabSwitch("audio")} 
        className={`flex-1 min-w-[80px] py-2 font-semibold rounded-md transition ${activeTab === "audio" ? "bg-white shadow-sm text-blue-600" : "text-slate-500 hover:text-slate-700"}`}
      >
        Audio
      </button>
    </div>
  );
}