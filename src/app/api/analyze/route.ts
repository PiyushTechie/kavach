import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Missing Gemini API Key");
      return NextResponse.json({ verdict: "Server Error", reason: "API configuration missing." }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    const prompt = `You are a cybersecurity expert. Analyze the following text: "${text}"
    
    CRITICAL MULTILINGUAL & ACCESSIBILITY INSTRUCTIONS:
    1. Identify the exact language the user's text is written in (e.g., Hindi, Marathi, English).
    2. Write your response entirely in that detected language.
    3. DO NOT use technical jargon like "Phishing" or "Social Engineering". Use simple, everyday words that a common person or elderly user would understand. 
       - For a threat, use clear warnings like "खतरा" (Danger), "सावधान रहें" (Be careful), or "धोखा" (Scam). 
       - For a safe message, use words like "सुरक्षित" (Safe).

    Return ONLY a valid JSON object matching this exact structure:
    {
      "status": "Must be exactly 'SAFE' or 'THREAT' in English",
      "verdict": "A short, simple warning or all-clear in the user's language (e.g., '⚠️ सावधान रहें: यह एक धोखा है!' or '✅ यह संदेश सुरक्षित है').",
      "reason": "Explain how the scam works in very simple, everyday terms in the user's language."
    }`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
        }
    });

    if (!response.text) throw new Error("No response from AI");

    const result = JSON.parse(response.text);
    
    return NextResponse.json(result);

  } catch (error: any) {
    console.error("AI Error:", error);
    
    if (error.status === 429 || (error.message && error.message.includes("429"))) {
      return NextResponse.json({ 
        status: "ERROR",
        verdict: "Scanner Cooling Down", 
        reason: "Our AI is analyzing a high volume of threats right now. Please wait about 60 seconds and try scanning again." 
      }, { status: 429 });
    }

    return NextResponse.json({ 
      status: "ERROR",
      verdict: "Connection Error", 
      reason: error.message || "Could not process the request." 
    }, { status: 500 });
  }
}