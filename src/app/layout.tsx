import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const googleSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kavach | The AI Firewall for Everyday People",
  description: "Protect your community from modern social engineering. Instantly detect phishing links, deepfake audio, and fake screenshots using Gemini AI.",
  keywords: ["scam checker", "phishing detector", "deepfake audio scanner", "cybersecurity", "fraud prevention", "Kavach app"],
  authors: [{ name: "Team The Exceptions" }],
  openGraph: {
    title: "Kavach | AI-Powered Scam Protection",
    description: "Scan suspicious links, WhatsApp forwards, and QR codes instantly. No account required.",
    url: "https://kavach.vercel.app",
    siteName: "Kavach",
    images: [
      {
        url: "/Phishing_URL_Logo.png", 
        width: 1200,
        height: 630,
        alt: "Kavach App Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavach | AI Scam Protection",
    description: "Instantly detect phishing links, deepfake audio, and fake screenshots.",
    images: ["/Phishing_URL_Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${googleSans.className} bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        
        <Navbar />

        <main className="flex-grow flex flex-col">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}