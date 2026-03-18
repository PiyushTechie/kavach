"use client";
import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { collection, query, orderBy, onSnapshot, limit } from "firebase/firestore";

interface ThreatRecord {
  id: string;
  type: string;
  content: string;
  verdict: string;
  timestamp: Date | null;
}

export default function ThreatLedger() {
  const [threats, setThreats] = useState<ThreatRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "threats"), orderBy("timestamp", "desc"), limit(50));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const threatData: ThreatRecord[] = [];
      snapshot.forEach((doc) => {
        threatData.push({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate() || new Date(),
        } as ThreatRecord);
      });
      setThreats(threatData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex-grow bg-slate-50 dark:bg-slate-950 pt-36 md:pt-48 pb-24 px-4 sm:px-6 min-h-screen transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Community Threat Ledger</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">
            A real-time, anonymous feed of the latest social engineering scams caught by Kavach's interceptors.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
          {loading ? (
            <div className="p-16 text-center text-slate-500 dark:text-slate-400 font-medium">Connecting to live feed...</div>
          ) : threats.length === 0 ? (
            <div className="p-16 text-center text-slate-500 dark:text-slate-400 font-medium">No threats logged yet. The community is safe!</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm font-bold uppercase tracking-wider transition-colors duration-300">
                    <th className="p-4 sm:p-5 whitespace-nowrap">Time</th>
                    <th className="p-4 sm:p-5 whitespace-nowrap">Vector</th>
                    <th className="p-4 sm:p-5">Payload Snippet</th>
                    <th className="p-4 sm:p-5 whitespace-nowrap">AI Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {threats.map((threat) => (
                    <tr key={threat.id} className="hover:bg-blue-50/50 dark:hover:bg-slate-800/50 transition duration-150">
                      <td className="p-4 sm:p-5 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        {threat.timestamp ? threat.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Just now'}
                      </td>
                      <td className="p-4 sm:p-5 text-sm">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wide
                          ${threat.type === 'url' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400' : 
                            threat.type === 'text' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-400' : 
                            threat.type === 'image' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' : 
                            'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400'}`}
                        >
                          {threat.type === 'url' ? '🌐 Link' : threat.type === 'text' ? '💬 SMS' : threat.type === 'image' ? '👁️ Image' : '🎙️ Audio'}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-sm text-slate-700 dark:text-slate-300 font-mono truncate max-w-[150px] sm:max-w-xs md:max-w-md">
                        {threat.content}
                      </td>
                      <td className="p-4 sm:p-5 text-sm text-red-700 dark:text-red-400 font-medium max-w-[150px] sm:max-w-xs">
                        <span className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                          <span className="line-clamp-2">{threat.verdict}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}