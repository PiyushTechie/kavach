type TabType = "url" | "text" | "image" | "audio";

interface ScannerTabsProps {
  activeTab: TabType;
  onTabSwitch: (tab: TabType) => void;
}

export default function ScannerTabs({ activeTab, onTabSwitch }: ScannerTabsProps) {
  return (
    <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-lg mb-6 text-sm overflow-x-auto transition-colors duration-300">
      <button 
        onClick={() => onTabSwitch("url")} 
        className={`flex-1 min-w-[80px] py-2 font-semibold rounded-md transition-all duration-300 ${activeTab === "url" ? "bg-white dark:bg-slate-800 shadow-sm text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"}`}
      >
        Link
      </button>
      <button 
        onClick={() => onTabSwitch("text")} 
        className={`flex-1 min-w-[80px] py-2 font-semibold rounded-md transition-all duration-300 ${activeTab === "text" ? "bg-white dark:bg-slate-800 shadow-sm text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"}`}
      >
        Message
      </button>
      <button 
        onClick={() => onTabSwitch("image")} 
        className={`flex-1 min-w-[80px] py-2 font-semibold rounded-md transition-all duration-300 ${activeTab === "image" ? "bg-white dark:bg-slate-800 shadow-sm text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"}`}
      >
        Screenshot
      </button>
      <button 
        onClick={() => onTabSwitch("audio")} 
        className={`flex-1 min-w-[80px] py-2 font-semibold rounded-md transition-all duration-300 ${activeTab === "audio" ? "bg-white dark:bg-slate-800 shadow-sm text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"}`}
      >
        Audio
      </button>
    </div>
  );
}