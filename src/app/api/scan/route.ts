import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ratelimit } from "../../../../lib/ratelimit"; // Adjust path if needed (e.g., "@/lib/ratelimit" or "../../../lib/ratelimit")

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
    
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);
    
    if (!success) {
      console.warn(`[RATE LIMIT BLOCKED] IP: ${ip}`);
      return NextResponse.json(
        { 
          status: "ERROR", 
          verdict: "Cooling Down", 
          reason: "Our AI is analyzing a high volume of threats. Please wait 60 seconds." 
        }, 
        { 
          status: 429,
          headers: {
            "X-RateLimit-Limit": limit.toString(),
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": reset.toString(),
          }
        }
      );
    }

    const { url } = await req.json();

    const gsbApiKey = process.env.GOOGLE_SAFE_BROWSING_API_KEY;
    
    if (gsbApiKey) {
      const gsbUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${gsbApiKey}`;
      const gsbResponse = await fetch(gsbUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client: { clientId: "kavach-app", clientVersion: "1.0.0" },
          threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [{ url: url }]
          }
        })
      });

      const gsbData = await gsbResponse.json();

      if (gsbData.matches && gsbData.matches.length > 0) {
        return NextResponse.json({
          status: "THREAT",
          verdict: "Threat",
          reason: "Google Safe Browsing has flagged this URL as a known malware or phishing link."
        });
      }
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
    const prompt = `
      You are an elite cybersecurity AI. Analyze this URL: "${url}"
      Google Safe Browsing did not flag it, but it might be a zero-day phishing threat.
      Check for these exact red flags:
      1. Is it HTTP instead of HTTPS while pretending to be a major brand (like Netflix, Apple, a bank)?
      2. Does it use words like "update", "billing", "login", or "urgent" in a weird domain?
      3. Is it typosquatting? (e.g., netfIix instead of netflix).
      
      Respond in strict JSON format exactly like this:
      {"verdict": "Threat", "reason": "A 1-sentence explanation of why the URL structure is dangerous."}
      or
      {"verdict": "Safe", "reason": "A 1-sentence explanation of why it appears normal."}
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const aiAnalysis = JSON.parse(cleanedText);

    return NextResponse.json({
      status: aiAnalysis.verdict === "Safe" ? "SAFE" : "THREAT",
      verdict: aiAnalysis.verdict,
      reason: aiAnalysis.reason
    });

  } catch (error: any) {
    console.error("Scanner Error:", error);
    return NextResponse.json({ status: "ERROR", verdict: "Error", reason: "Could not process the URL." }, { status: 500 });
  }
}