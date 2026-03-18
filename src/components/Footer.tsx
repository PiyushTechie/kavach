import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 dark:bg-slate-950 text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 text-base mb-16">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center group inline-flex mb-6">
              <div className="group-hover:scale-105 transition-transform duration-300 bg-white/10 dark:bg-transparent rounded-lg p-1">
                <Image 
                  src="/Phishing_URL_Logo.png" 
                  alt="Kavach Logo"
                  width={400} 
                  height={120} 
                  className="w-auto h-10 sm:h-12 md:h-14 object-contain object-left drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" 
                />
              </div>
            </Link>
            <p className="max-w-sm leading-relaxed text-slate-400 dark:text-slate-500 transition-colors duration-300">
              Protecting vulnerable users from modern social engineering through the power of multimodal artificial intelligence.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-2">Features</h4>
            <Link href="/scan" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">URL Scanner</Link>
            <Link href="/scan" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">Message Analyzer</Link>
            <Link href="/scan" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">Vision Intelligence</Link>
            <Link href="/scan" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">Vishing Detector</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-2">Resources</h4>
            <Link href="/ledger" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">Threat Ledger</Link>
            <Link href="/how-it-works" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">How it Works</Link>
            <Link href="/privacy" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">Privacy Policy</Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">API Docs</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-2">Hack2Skill AI Solution Challenge</h4>
            <p className="leading-relaxed text-slate-400 dark:text-slate-500 transition-colors duration-300">Built with Next.js, Firebase, Google Safe Browsing, and Gemini 2.5 Flash.</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-2 w-fit group font-medium">
              <span>View Source Code</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800/80 text-sm text-slate-500 dark:text-slate-600 gap-4 transition-colors duration-300">
          <p>© {currentYear} Kavach. Built by Team The Exceptions.</p>
        </div>
      </div>
    </footer>
  );
}
