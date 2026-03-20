import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 dark:bg-slate-950 text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="absolute top-0 left-0 w-full h-px bg-slate-900"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 text-base mb-16">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center group inline-flex mb-6">
              <div className="group-hover:scale-105 transition-transform duration-300 bg-transparent rounded-lg p-1 border border-transparent">
                <Image 
                  src="/Phishing_URL_Logo.png" 
                  alt="Kavach Logo"
                  width={400} 
                  height={120} 
                  className="w-auto h-10 sm:h-12 md:h-14 object-contain object-left drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                />
              </div>
            </Link>
            <p className="max-w-sm leading-relaxed text-slate-100 transition-colors duration-300">
              Protecting vulnerable users from modern social engineering through the power of multimodal artificial intelligence.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black tracking-widest uppercase text-xs mb-2 opacity-90">Features</h4>
            <Link href="/scan" className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 w-fit group text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors shadow-[0_0_5px_rgba(59,130,246,0)] group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              URL Scanner
            </Link>
            <Link href="/scan" className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 w-fit group text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors shadow-[0_0_5px_rgba(59,130,246,0)] group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              Message Analyzer
            </Link>
            <Link href="/scan" className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 w-fit group text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors shadow-[0_0_5px_rgba(59,130,246,0)] group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              Vision Intelligence
            </Link>
            <Link href="/scan" className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 w-fit group text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors shadow-[0_0_5px_rgba(59,130,246,0)] group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              Vishing Detector
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-2">Resources</h4>
            <Link href="/ledger" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">Threat Ledger</Link>
            <Link href="/how-it-works" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">How it Works</Link>
            <Link href="/privacy" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">Privacy Policy</Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">API Docs</Link>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800/80 text-sm text-slate-500 gap-4">
          <p className="flex items-center gap-1.5">
            © {currentYear} Kavach. Designed & Engineered by <span className="font-bold text-slate-300">Piyush Prajapati</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
