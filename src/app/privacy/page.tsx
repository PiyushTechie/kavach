import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 pt-44 pb-24 transition-colors duration-300 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Privacy Policy & Data Ethics</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg transition-colors duration-300">Last Updated: March 2026</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300">
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0 mb-4">1. Our Core Privacy Philosophy</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Kavach was built by Team The Exceptions to be a shield, not a surveillance tool. Because we process potentially sensitive user inputs (such as WhatsApp forwards, voice notes, and screenshots) to detect scams, our architecture is strictly designed around <strong>ephemeral processing and zero-retention</strong> for media.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. How We Handle Your Inputs</h2>
            <ul className="space-y-4 mb-8 text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li><strong>URLs & Text:</strong> Sent via secure API to Google Safe Browsing and Gemini AI for analysis. We do not store this data unless you explicitly opt-in to the Community Ledger.</li>
              <li><strong>Images & Screenshots:</strong> Processed in real-time. QR codes are extracted locally where possible. Images sent to Gemini Vision are analyzed and immediately discarded by our servers. We do not maintain an image database.</li>
              <li><strong>Audio (Voice Notes):</strong> Processed ephemerally to detect deepfakes and social engineering tactics. The audio buffer is cleared immediately after the AI verdict is returned.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. The Community Threat Ledger</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              To help protect others, users can optionally check the "Anonymously share to Community Ledger" box. If a threat is detected, we log:
              <br/><br/>
              1. The type of vector (Link, SMS, Image, Audio).<br/>
              2. A short text snippet of the payload (e.g., the malicious URL or a fragment of the text).<br/>
              3. The AI's verdict and reasoning.<br/><br/>
              <strong>We never log personally identifiable information (PII).</strong> Media files (images and audio) are <em>never</em> saved to the ledger.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Third-Party Processors</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              To provide enterprise-grade security, we route data through the following trusted providers:
            </p>
            <ul className="space-y-4 mb-8 text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li><strong>Google Generative AI (Gemini):</strong> Used for zero-day threat synthesis and deepfake detection.</li>
              <li><strong>Google Safe Browsing:</strong> Used for deterministic URL blocklist checks.</li>
              <li><strong>Vercel & Upstash Redis:</strong> Used for secure hosting, Edge API routing, and strictly enforcing API rate-limits to prevent abuse.</li>
              <li><strong>Firebase Firestore:</strong> Used exclusively to host the anonymized Community Threat Ledger.</li>
            </ul>

            <div className="bg-blue-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-blue-100 dark:border-slate-700 mt-10">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-400 mb-2">Hack2Skill GDG Solution Challenge Notice</h3>
              <p className="text-sm text-blue-800 dark:text-slate-300 leading-relaxed">
                This application is a functional prototype built for demonstration purposes during the Hack2Skill GDG Hackathon. While the security features are functional, users should always exercise human caution and not rely solely on automated tools.
              </p>
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