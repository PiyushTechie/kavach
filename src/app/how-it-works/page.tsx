import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 flex flex-col items-center pt-44 pb-24 transition-colors duration-300 min-h-screen">
      
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
          The Anatomy of <span className="text-blue-600 dark:text-blue-400">Kavach</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
          We combine deterministic blocklists with probabilistic AI reasoning. Here is exactly what happens in the milliseconds between you clicking "Analyze" and getting a verdict.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="relative border-l-2 border-blue-200 dark:border-slate-800 ml-4 md:ml-0 md:border-none space-y-16">
          
          <div className="relative md:flex items-center justify-between group">
            <div className="hidden md:block w-5/12 text-right pr-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">1. Secure Ingestion</h3>
              <p className="text-slate-600 dark:text-slate-400">Your URL, text, image, or audio is sent to our Next.js Edge APIs. Requests are instantly filtered by Upstash Redis to block botnets and rate-limit abuse.</p>
            </div>
            <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center text-white font-bold shadow-lg z-10 transition-colors duration-300">
              1
            </div>
            <div className="md:hidden pl-8 mb-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">1. Secure Ingestion</h3>
              <p className="text-slate-600 dark:text-slate-400">Your URL, text, image, or audio is sent to our Next.js Edge APIs. Requests are instantly filtered by Upstash Redis to block botnets and rate-limit abuse.</p>
            </div>
            <div className="md:w-5/12 pl-8 md:pl-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-colors duration-300">
                <div className="flex items-center gap-3 text-sm font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 p-3 rounded-lg">
                  <span className="text-emerald-500 font-bold">POST</span> /api/scan
                  <span className="ml-auto text-blue-500">Rate Limit: OK</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:flex items-center justify-between md:flex-row-reverse group">
            <div className="hidden md:block w-5/12 text-left pl-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">2. Dual-Layer Analysis</h3>
              <p className="text-slate-600 dark:text-slate-400">URLs are checked against the Google Safe Browsing API. If it's a zero-day threat, text, or media, it is routed to Gemini 2.5 Flash for deep forensic and psychological analysis.</p>
            </div>
            <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-indigo-600 dark:bg-indigo-500 rounded-full border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center text-white font-bold shadow-lg z-10 transition-colors duration-300">
              2
            </div>
            <div className="md:hidden pl-8 mb-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">2. Dual-Layer Analysis</h3>
              <p className="text-slate-600 dark:text-slate-400">URLs are checked against the Google Safe Browsing API. If it's a zero-day threat, text, or media, it is routed to Gemini 2.5 Flash for deep forensic and psychological analysis.</p>
            </div>
            <div className="md:w-5/12 pr-8 md:pr-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 group-hover:border-indigo-300 dark:group-hover:border-indigo-700 transition-colors duration-300">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"></path></svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Gemini 2.5 Flash Engine</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Multimodal Context Processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:flex items-center justify-between group">
            <div className="hidden md:block w-5/12 text-right pr-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">3. Verdict & Threat Logging</h3>
              <p className="text-slate-600 dark:text-slate-400">A jargon-free verdict is returned to the user in their local language. If a threat is confirmed and consent is given, it is anonymously appended to the Firebase Threat Ledger to protect others.</p>
            </div>
            <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-emerald-600 dark:bg-emerald-500 rounded-full border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center text-white font-bold shadow-lg z-10 transition-colors duration-300">
              3
            </div>
            <div className="md:hidden pl-8 mb-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">3. Verdict & Threat Logging</h3>
              <p className="text-slate-600 dark:text-slate-400">A jargon-free verdict is returned to the user in their local language. If a threat is confirmed and consent is given, it is anonymously appended to the Firebase Threat Ledger to protect others.</p>
            </div>
            <div className="md:w-5/12 pl-8 md:pl-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 group-hover:border-emerald-300 dark:group-hover:border-emerald-700 transition-colors duration-300">
                 <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full mb-3 overflow-hidden">
                   <div className="h-full bg-red-500 w-[95%]"></div>
                 </div>
                 <div className="text-xs font-bold text-red-500 uppercase tracking-widest">Critical Threat Caught</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-24 text-center">
        <Link href="/scan" className="bg-blue-600 dark:bg-blue-700 text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition inline-block">
          Test the Architecture
        </Link>
      </div>

    </div>
  );
}