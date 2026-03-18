"use client";
import { useState, useEffect } from "react";

const languageGroups = [
  {
    category: "Global Languages",
    items: [
      { code: "en", name: "English", flag: "🇺🇸" },
      { code: "zh-CN", name: "中文 (Chinese)", flag: "🇨🇳" },
      { code: "es", name: "Español (Spanish)", flag: "🇪🇸" },
      { code: "ar", name: "العربية (Arabic)", flag: "🇸🇦" },
      { code: "fr", name: "Français (French)", flag: "🇫🇷" },
      { code: "ru", name: "Русский (Russian)", flag: "🇷🇺" },
      { code: "pt", name: "Português", flag: "🇧🇷" },
      { code: "de", name: "Deutsch (German)", flag: "🇩🇪" },
      { code: "ja", name: "日本語 (Japanese)", flag: "🇯🇵" },
      { code: "ko", name: "한국어 (Korean)", flag: "🇰🇷" },
      { code: "it", name: "Italiano", flag: "🇮🇹" },
      { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
    ]
  },
  {
    category: "Indian Languages",
    items: [
      { code: "hi", name: "हिन्दी (Hindi)", flag: "🇮🇳" },
      { code: "bn", name: "বাংলা (Bengali)", flag: "🇮🇳" },
      { code: "te", name: "తెలుగు (Telugu)", flag: "🇮🇳" },
      { code: "mr", name: "मराठी (Marathi)", flag: "🇮🇳" },
      { code: "ta", name: "தமிழ் (Tamil)", flag: "🇮🇳" },
      { code: "ur", name: "اردو (Urdu)", flag: "🇮🇳" },
      { code: "gu", name: "ગુજરાતી (Gujarati)", flag: "🇮🇳" },
      { code: "kn", name: "ಕನ್ನಡ (Kannada)", flag: "🇮🇳" },
      { code: "ml", name: "മലയാളം (Malayalam)", flag: "🇮🇳" },
      { code: "or", name: "ଓଡ଼ିଆ (Odia)", flag: "🇮🇳" },
      { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)", flag: "🇮🇳" },
      { code: "as", name: "অসমীয়া (Assamese)", flag: "🇮🇳" },
      { code: "mai", name: "मैथिली (Maithili)", flag: "🇮🇳" },
      { code: "sa", name: "संस्कृत (Sanskrit)", flag: "🇮🇳" },
    ]
  }
];

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]*)/);
    if (match) {
      const lang = match[1].split('/')[2];
      if (lang) setCurrentLang(lang);
    }
  }, []);

  const switchLanguage = (langCode: string) => {
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/`;
    
    window.location.reload();
  };

  const getCurrentFlag = () => {
    for (const group of languageGroups) {
      const found = group.items.find(l => l.code === currentLang);
      if (found) return found.flag;
    }
    return "🇺🇸"; 
  };

  return (
    <div className="relative group z-50">
      <button className="flex items-center gap-2 p-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition shadow-sm border border-slate-200 dark:border-slate-700">
        <span className="text-lg leading-none">{getCurrentFlag()}</span>
        <span className="text-xs font-bold uppercase hidden sm:block pr-1">{currentLang}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
        
        <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600">
          
          {languageGroups.map((group, groupIndex) => (
            <div key={group.category}>
              <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/50 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider sticky top-0 z-10 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800">
                {group.category}
              </div>
              
              {group.items.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2.5 hover:bg-blue-50 dark:hover:bg-slate-800 flex items-center gap-3 transition ${
                    currentLang === lang.code ? "bg-blue-50 dark:bg-slate-800/50 font-bold text-blue-600 dark:text-blue-400" : "font-medium text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <span className="text-xl leading-none">{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                </button>
              ))}
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}