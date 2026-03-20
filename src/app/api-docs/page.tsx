import Link from "next/link";

export default function ApiDocs() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 pt-40 pb-24 transition-colors duration-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">API Documentation</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg transition-colors duration-300">
            Integrate Kavach's threat-detection intelligence directly into your own applications.
          </p>
        </div>

        <div className="space-y-8">
          
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
            <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 px-6 py-4 flex items-center gap-4">
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-bold px-3 py-1 rounded-md text-sm">POST</span>
              <code className="text-slate-700 dark:text-slate-300 font-mono font-semibold">/api/scan</code>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-400 mb-4">Analyzes a URL for phishing, typosquatting, and malicious payloads.</p>
              
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Request Body</h4>
              <pre className="bg-slate-800 text-slate-200 p-4 rounded-xl font-mono text-sm overflow-x-auto mb-6">
                <code>{`{\n  "url": "https://secure-login-update-bank.com"\n}`}</code>
              </pre>

              <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Response</h4>
              <pre className="bg-slate-800 text-slate-200 p-4 rounded-xl font-mono text-sm overflow-x-auto">
                <code>{`{\n  "status": "THREAT",\n  "verdict": "Malicious URL Detected",\n  "reason": "This URL exhibits classic typosquatting and is not associated with any official banking institution."\n}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
            <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 px-6 py-4 flex items-center gap-4">
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-bold px-3 py-1 rounded-md text-sm">POST</span>
              <code className="text-slate-700 dark:text-slate-300 font-mono font-semibold">/api/analyze</code>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-400 mb-4">Analyzes raw text (SMS, WhatsApp forwards, emails) for social engineering tactics and false urgency.</p>
              
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Request Body</h4>
              <pre className="bg-slate-800 text-slate-200 p-4 rounded-xl font-mono text-sm overflow-x-auto mb-6">
                <code>{`{\n  "text": "URGENT: Your electricity connection will be cut tonight at 9 PM. Call this number immediately to pay your pending bill."\n}`}</code>
              </pre>

              <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Response</h4>
              <pre className="bg-slate-800 text-slate-200 p-4 rounded-xl font-mono text-sm overflow-x-auto">
                <code>{`{\n  "status": "THREAT",\n  "verdict": "Social Engineering Detected",\n  "reason": "This matches a known electricity bill scam pattern utilizing false urgency to provoke immediate action."\n}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
            <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 px-6 py-4 flex flex-wrap items-center gap-4">
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-bold px-3 py-1 rounded-md text-sm">POST</span>
              <code className="text-slate-700 dark:text-slate-300 font-mono font-semibold">/api/analyze-image</code>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <code className="text-slate-700 dark:text-slate-300 font-mono font-semibold">/api/analyze-audio</code>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-400 mb-4">Processes base64 encoded media files for visual manipulation, QR code extraction, and vishing (voice phishing) detection.</p>
              
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Request Body</h4>
              <pre className="bg-slate-800 text-slate-200 p-4 rounded-xl font-mono text-sm overflow-x-auto mb-6">
                <code>{`{\n  "imageBase64": "iVBORw0KGgoAAAANSUhEUgAA...", // or "audioBase64" \n  "mimeType": "image/jpeg"\n}`}</code>
              </pre>
            </div>
          </div>

        </div>
        
        <div className="mt-12 text-center">
           <Link href="/" className="text-blue-600 dark:text-blue-400 font-bold hover:underline transition-all">
             &larr; Return to Dashboard
           </Link>
        </div>

      </div>
    </div>
  );
}