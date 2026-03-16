import { useEffect, useState } from "react";

interface ScannerResultProps {
  status: string;
  verdict: string;
  reason: string;
}

export default function ScannerResult({ status, verdict, reason }: ScannerResultProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (status) setIsVisible(true);
    else setIsVisible(false);
  }, [status]);

  if (!status) return null;

  const isThreat = status.includes("THREAT") || status.includes("ERROR") || verdict.includes("Threat") || verdict.includes("Scam");

  return (
    <div className={`transform transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} flex flex-col items-center p-6 rounded-2xl border ${isThreat ? "bg-red-950/40 border-red-500/30 shadow-[0_0_30px_rgba(220,38,38,0.15)]" : "bg-emerald-50 border-emerald-200 shadow-sm"}`}>
      
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isThreat ? "bg-red-500/20 text-red-500 animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.4)]" : "bg-emerald-100 text-emerald-600"}`}>
        {isThreat ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
        )}
      </div>

      <h3 className={`text-sm font-bold tracking-widest uppercase mb-1 transition-colors duration-500 ${isThreat ? "text-red-500" : "text-emerald-600"}`}>
        {status}
      </h3>
      
      <h2 className={`text-2xl font-extrabold text-center mb-4 transition-colors duration-500 ${isThreat ? "text-white" : "text-slate-900"}`}>
        {verdict}
      </h2>
      
      <div className={`w-full p-4 rounded-xl transition-all duration-500 ${isThreat ? "bg-red-950/80 border border-red-500/20" : "bg-white border border-emerald-100"}`}>
        <p className={`text-center text-sm leading-relaxed ${isThreat ? "text-red-200 font-mono" : "text-slate-600"}`}>
          {reason}
        </p>
      </div>

    </div>
  );
}