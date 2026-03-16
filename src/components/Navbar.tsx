"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
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

  return (
    <header className="fixed top-0 z-50 w-full flex flex-col">
      <div className="w-full bg-slate-900 text-slate-200 py-2.5 text-center text-sm font-medium flex justify-center items-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Kavach is live for the Hack2Skill GDG Solution Challenge. Built by Team The Exceptions.
      </div>

      <nav
        className={`w-full transition-all duration-300 ease-in-out border-b ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm py-3"
            : "bg-white/50 backdrop-blur-sm border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
          <Link href="/" className="flex items-center group">
            <div className="group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/Phishing_URL_Logo.png"
                alt="Kavach Logo"
                width={400} 
                height={120} 
                className="w-auto h-10 sm:h-12 md:h-14 object-contain object-left" 
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
                    className={`relative text-sm transition-colors duration-300 ${
                      isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                    } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ${
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <Link 
                href="/scan" 
                className="bg-blue-600 text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-700 shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Launch App
              </Link>
            </div>

            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden absolute w-full bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors ${
                  pathname === link.href ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/scan" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center bg-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-md"
            >
              Launch App
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}