"use client";
import { useState, useEffect, useRef } from "react";

const languageGroups = [
  {
    category: "Global",
    items: [
      { code: "en", name: "English", country: "us" },
      { code: "zh-CN", name: "中文 (Chinese)", country: "cn" },
      { code: "es", name: "Español (Spanish)", country: "es" },
      { code: "ar", name: "العربية (Arabic)", country: "sa" },
      { code: "fr", name: "Français (French)", country: "fr" },
      { code: "ru", name: "Русский (Russian)", country: "ru" },
      { code: "pt", name: "Português", country: "br" },
      { code: "de", name: "Deutsch (German)", country: "de" },
      { code: "ja", name: "日本語 (Japanese)", country: "jp" },
      { code: "ko", name: "한국어 (Korean)", country: "kr" },
    ]
  },
  {
    category: "Indian",
    items: [
      { code: "hi", name: "हिन्दी (Hindi)", country: "in" },
      { code: "bn", name: "বাংলা (Bengali)", country: "in" },
      { code: "te", name: "తెలుగు (Telugu)", country: "in" },
      { code: "mr", name: "मराठी (Marathi)", country: "in" },
      { code: "ta", name: "தமிழ் (Tamil)", country: "in" },
      { code: "ur", name: "اردو (Urdu)", country: "in" },
      { code: "gu", name: "ગુજરાતી (Gujarati)", country: "in" },
      { code: "kn", name: "ಕನ್ನಡ (Kannada)", country: "in" },
      { code: "ml", name: "മലയാളം (Malayalam)", country: "in" },
      { code: "or", name: "ଓଡ଼ିଆ (Odia)", country: "in" },
      { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)", country: "in" },
    ]
  }
];

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]*)/);
    if (match) {
      const lang = match[1].split('/')[2];
      if (lang) setCurrentLang(lang);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (langCode: string) => {
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/`;
    setIsOpen(false);
    window.location.reload(); 
  };

  const getCurrentCountry = () => {
    for (const group of languageGroups) {
      const found = group.items.find(l => l.code === currentLang);
      if (found) return found.country;
    }
    return "us"; 
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 border cursor-pointer ${
          isOpen 
            ? "bg-blue-50 border-blue-600 dark:bg-slate-800 dark:border-blue-500 shadow-md" 
            : "bg-slate-200 border-transparent dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 shadow-inner"
        } focus:outline-none`}
        aria-label="Change Language"
      >
        <img 
          src={`https://flagcdn.com/w40/${getCurrentCountry()}.png`} 
          alt="Language Flag" 
          className="w-5 h-auto rounded-[2px] shadow-sm pointer-events-none"
        />
      </button>
      
      <div 
        className={`absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl transform origin-top-right transition-all duration-200 ease-out z-50 ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        
        <div className="max-h-[300px] overflow-y-auto py-2 language-scrollbar">
          
          {languageGroups.map((group, groupIdx) => (
            <div key={group.category}>
              
              {groupIdx > 0 && <div className="h-px w-full bg-slate-100 dark:bg-slate-800 my-2"></div>}
              <div className="px-4 py-1.5 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-white dark:bg-slate-900 sticky top-0">
                {group.category}
              </div>
              
              <div className="flex flex-col mt-1">
                {group.items.map((lang) => {
                  const isActive = currentLang === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 flex items-center gap-3 cursor-pointer transition-colors duration-150 ${
                        isActive 
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold border-l-2 border-blue-600 dark:border-blue-500" 
                          : "bg-transparent text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 border-l-2 border-transparent"
                      }`}
                    >
                      <img 
                        src={`https://flagcdn.com/w20/${lang.country}.png`} 
                        alt="flag" 
                        className="w-4 h-auto rounded-sm shadow-sm"
                      />
                      <span className="text-sm">
                        {lang.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}