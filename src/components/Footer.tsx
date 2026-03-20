import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] text-slate-400 py-16 border-t border-slate-800/80 relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>

      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="absolute top-0 left-0 w-full h-px bg-slate-900"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 text-base mb-16">
          
          <div className="md:col-span-2 pr-4">
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
            <h4 className="text-white font-black tracking-widest uppercase text-xs mb-2 opacity-90">Resources</h4>
            <Link href="/ledger" className="text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">Threat Ledger</Link>
            <Link href="/how-it-works" className="text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">How it Works</Link>
            <Link href="/privacy" className="text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">Terms of Use</Link>
            <Link href="/api-docs" className="text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 w-fit">API Docs</Link>
            
            <div className="mt-4 pt-4 border-t border-slate-800/80">
              <a href="https://github.com/PiyushTechie/kavach" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors w-fit group font-bold text-sm">
                <span>View Source Code</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
              </a>
            </div>
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