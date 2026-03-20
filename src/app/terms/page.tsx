import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 pt-40 pb-24 transition-colors duration-300 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Terms of Use</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg transition-colors duration-300">Last Updated: March 2026</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300">
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              By accessing and using Kavach, you agree to be bound by these Terms of Use. Kavach is a security tool developed by Piyush Prajapati to help protect users from digital deception.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Nature of the Service</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Kavach utilizes artificial intelligence (Google Gemini) and third-party APIs (Google Safe Browsing) to analyze links, messages, images, and audio for potential social engineering threats. <strong>Artificial Intelligence is probabilistic, not deterministic.</strong> Kavach may produce false positives (flagging safe content as dangerous) or false negatives (failing to identify a threat).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. No Guarantee of Security</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Kavach is designed as a supplementary educational tool to aid in identifying potential digital deception. It is <strong>not a replacement for standard antivirus software, common sense, or professional security advice.</strong> You should not rely solely on Kavach's verdicts when deciding to interact with a potentially harmful link or message.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Acceptable Use & Rate Limiting</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              You agree not to misuse the Kavach APIs or web interface. To ensure fair access and maintain system stability, we utilize strict edge rate-limiting via Upstash Redis. Any attempt to bypass rate limits, reverse-engineer the application, or execute Denial of Service (DoS) attacks will result in immediate IP blacklisting.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Under no circumstances shall the developer be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use Kavach, including financial loss resulting from falling victim to a scam after utilizing this tool.
            </p>

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