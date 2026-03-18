import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 flex flex-col items-center transition-colors duration-300">
      
      <div className="relative w-full flex flex-col items-center overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 transition-colors duration-300">
        
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex justify-center">
          <div className="absolute top-[-20%] w-[800px] md:w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15)_0%,rgba(255,255,255,0)_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.2)_0%,rgba(2,6,23,0)_70%)] blur-3xl transition-all duration-300"></div>
        </div>

        <section className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-40 pb-24 text-center">
          
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8 overflow-hidden relative group cursor-default transition-colors duration-300">
            <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] group-hover:animate-[shimmer_1.5s_infinite]"></div>
            
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"></path></svg>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Powered by Gemini 2.5 Flash</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight transition-colors duration-300">
            The AI Firewall for <br />
            <span className="bg-[linear-gradient(110deg,#2563eb,45%,#38bdf8,55%,#2563eb)] dark:bg-[linear-gradient(110deg,#60a5fa,45%,#38bdf8,55%,#60a5fa)] bg-[length:200%_auto] text-transparent bg-clip-text animate-text-gradient inline-block">
              Everyday People.
            </span>
          </h1>
          
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium transition-colors duration-300">
            Protect your community from modern social engineering. Instantly detect phishing links, deepfake audio, and fake screenshots in regional languages.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/scan" className="bg-blue-600 text-white text-lg font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:bg-blue-700 transition-all transform hover:-translate-y-1">
              Launch Scanner
            </Link>
            <Link href="/ledger" className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-lg font-bold px-8 py-4 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1">
              View Live Threats
            </Link>
          </div>
        </section>
      </div>

      <section className="w-full bg-slate-900 dark:bg-slate-950/80 border-y border-slate-800 py-20 text-center px-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Cybersecurity shouldn't require a tech degree.</h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-10">
            Every day, millions of vulnerable users fall victim to digital deception. Kavach bridges the digital literacy gap by acting as a smart, multilingual guardian that speaks your language.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-4xl font-extrabold text-blue-400 mb-2">1 in 4</div>
              <p className="text-slate-400 text-sm">Users fall for phishing attacks</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-teal-400 mb-2">100%</div>
              <p className="text-slate-400 text-sm">Free community protection</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-indigo-400 mb-2">24/7</div>
              <p className="text-slate-400 text-sm">AI-powered threat analysis</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-16 transition-colors duration-300">As simple as sending a text.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 shadow-sm mb-6 shadow-blue-100 dark:shadow-none transition-colors duration-300">1</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">Copy or Upload</h4>
              <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Got a suspicious WhatsApp forward, a strange voice note, or a weird QR code? Just copy it or take a screenshot.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 shadow-sm mb-6 shadow-blue-100 dark:shadow-none transition-colors duration-300">2</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">Paste into Kavach</h4>
              <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Select the right tab (Link, Message, Image, or Audio) in our scanner and hit analyze. No account needed.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-600 dark:bg-blue-600 border-2 border-blue-600 dark:border-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-md mb-6 shadow-blue-200 dark:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300">3</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">Get Instant Clarity</h4>
              <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Gemini AI breaks down the scam using simple, everyday words in your local language so you know exactly what to do.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-slate-900 py-24 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2 transition-colors duration-300">Under The Hood</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white transition-colors duration-300">Multimodal Threat Detection</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition">
              <div className="w-14 h-14 bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-slate-600">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"></path></svg>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Vishing Audio Analysis</h4>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">Upload WhatsApp voice notes. Gemini natively listens to the audio to detect false urgency and deepfake artifacts without needing manual transcription.</p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/50 transition">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Vision Intelligence</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Scan fake payment receipts, electricity bill threats, and phishing QR codes via image uploads.</p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-emerald-300 dark:hover:border-emerald-500/50 transition">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Safe Browsing API</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Cross-reference millions of URLs against Google's global threat database.</p>
            </div>

            <div className="lg:col-span-2 bg-slate-900 dark:bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-lg">
              <div className="w-14 h-14 bg-slate-800 text-teal-400 rounded-2xl flex items-center justify-center mb-6 border border-slate-700">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path></svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Regional Language Native</h4>
              <p className="text-slate-400 text-lg leading-relaxed">Automatically detects Hindi, Marathi, and more. Outputs jargon-free warnings tailored to protect elderly and vulnerable users.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 dark:bg-slate-950 py-24 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Threats we stop every day.</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto transition-colors duration-300">Scammers evolve quickly. Kavach uses AI to understand the psychology of a scam, not just the code.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition group">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-lg">"Your KYC is pending"</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">SMS Phishing (Smishing)</p>
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 group-hover:bg-blue-50 dark:group-hover:bg-slate-800 transition">
                <div className="text-blue-600 dark:text-blue-400 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path></svg>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"><span className="font-bold text-blue-700 dark:text-blue-400">AI Intercept:</span> Spots the false urgency and blocks the fake banking link before the user clicks.</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition group">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-lg">"Scan to receive ₹5000"</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">QR Code Scams (Quishing)</p>
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 group-hover:bg-blue-50 dark:group-hover:bg-slate-800 transition">
                <div className="text-blue-600 dark:text-blue-400 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path></svg>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"><span className="font-bold text-blue-700 dark:text-blue-400">AI Intercept:</span> Vision AI reads the QR code directly from the screenshot and exposes the malicious hidden URL.</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition group">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-lg">"Police verification call"</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Voice Scams (Vishing)</p>
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 group-hover:bg-blue-50 dark:group-hover:bg-slate-800 transition">
                <div className="text-blue-600 dark:text-blue-400 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path></svg>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"><span className="font-bold text-blue-700 dark:text-blue-400">AI Intercept:</span> Listens to the audio file to detect deepfake anomalies and psychological fear tactics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-blue-600 dark:bg-blue-700 text-center px-6 transition-colors duration-300">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to secure your digital life?</h2>
        <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">No accounts required. Just paste your suspicious link, message, or audio and get an instant safety check.</p>
        <Link href="/scan" className="bg-white text-blue-600 dark:text-blue-700 text-xl font-bold px-10 py-5 rounded-full shadow-xl hover:bg-slate-50 transition inline-block">
          Start Scanning Now
        </Link>
      </section>

    </div>
  );
}