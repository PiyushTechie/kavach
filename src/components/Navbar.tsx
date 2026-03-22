"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 
  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Scanner", href: "/scan" },
    { name: "Threat Ledger", href: "/ledger" },
  ];

  const renderThemeToggle = () => {
    if (!mounted) return <div className="w-9 h-9" />; 
    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shadow-inner flex items-center justify-center w-10 h-10 cursor-pointer"
        aria-label="Toggle Dark Mode"
      >
        {theme === "dark" ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
        )}
      </button>
    );
  };

  return (
    <header className="fixed top-0 z-50 w-full flex flex-col">
      <nav
        className={`w-full transition-all duration-300 ease-in-out border-b ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm py-4"
            : "bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center">
            
            <Link href="/" className="flex items-center group">
              <div className="group-hover:scale-105 transition-transform duration-300 bg-white/10 dark:bg-transparent rounded-lg p-1">
                <Image 
                  src="/Phishing_URL_Logo.png"
                  alt="Kavach Logo"
                  width={400} 
                  height={120} 
                  className="w-auto h-12 sm:h-14 md:h-16 object-contain object-left drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
                  priority 
                />
              </div>
            </Link>

            <div className="hidden md:flex gap-8 items-center font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-base font-bold transition-colors duration-300 group ${
                      isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    <span className={`absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-blue-600 dark:border-blue-400 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"}`}></span>
                    <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-blue-600 dark:border-blue-400 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"}`}></span>
                    
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="flex items-center gap-4 ml-2 border-l pl-6 border-slate-300 dark:border-slate-700">
                <LanguageSwitcher />
                {renderThemeToggle()}
              </div>

              <Link 
                href="/scan" 
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] ml-4 group focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f8fafc_0%,#3b82f6_50%,#f8fafc_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#020617_0%,#3b82f6_50%,#020617_100%)] transition-all duration-500" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 px-8 py-3 text-base font-bold backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-50/80 dark:group-hover:bg-slate-900/80 shadow-[0_0_15px_rgba(37,99,235,0.1)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                  <span className="relative flex items-center gap-2 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 group-hover:animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    Launch App
                  </span>
                </span>
              </Link>

            </div>

            <div className="flex items-center gap-3 md:hidden">
              <LanguageSwitcher />
              {renderThemeToggle()}
              <button 
                className="p-2 text-slate-600 dark:text-slate-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div 
          className={`md:hidden absolute w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-bold px-4 py-3 rounded-xl transition-colors ${
                  pathname === link.href ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="/scan" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative inline-flex h-14 mt-4 overflow-hidden rounded-xl p-[2px] group focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f8fafc_0%,#3b82f6_50%,#f8fafc_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#3b82f6_50%,#0f172a_100%)] transition-all duration-500" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-white dark:bg-slate-900 px-6 py-4 text-lg font-bold backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-50/80 dark:group-hover:bg-slate-800/80 shadow-md">
                <span className="relative flex items-center gap-2 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  Launch App
                </span>
              </span>
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
}