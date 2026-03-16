import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { text } from 'stream/consumers';

export async function POST(request: Request) {
  try {
    const { imageBase64, mimeType } = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ verdict: "Server Error", reason: "API key missing." }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });

    const prompt = `You are a cybersecurity expert. Analyze the uploaded image.
    
    CRITICAL MULTILINGUAL & ACCESSIBILITY INSTRUCTIONS:
    1. Read the text in the image and identify its exact language (e.g., Hindi, Marathi, English).
    2. Write your response entirely in that detected language.
    3. DO NOT use technical jargon like "Phishing", "Malware", or "URL". Use simple, everyday words that a common person or elderly user would understand.
       - For a threat, use clear warnings like "खतरा" (Danger), "सावधान रहें" (Be careful), or "धोखा" (Scam). 
       - For safe content, use words like "सुरक्षित" (Safe).

    Return ONLY a valid JSON object matching this exact structure:
    {
      "status": "Must be exactly 'SAFE' or 'THREAT' in English",
      "verdict": "A short, simple warning or all-clear in the user's language (e.g., '⚠️ सावधान रहें: यह एक धोखा है!' or '✅ यह सुरक्षित है').",
      "reason": "Explain the trick or safety of the image in very simple, easy-to-understand terms in the user's language."
    }`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            prompt,
            { inlineData: { data: imageBase64, mimeType: mimeType } }
        ],
        config: {
            responseMimeType: "application/json",
        }
    });

    if (!response.text) throw new Error("No response from AI");

    const result = JSON.parse(response.text);
    return NextResponse.json(result);

  } catch (error: any) {
    console.error("Vision AI Error:", error);
    return NextResponse.json({ verdict: "Error", reason: error.message || "Could not process the image." }, { status: 500 });
  }
}