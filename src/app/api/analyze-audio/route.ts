import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const { audioBase64, mimeType } = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ verdict: "Server Error", reason: "API key missing." }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });

    const prompt = `You are a cybersecurity expert. Analyze this uploaded audio recording (it may be a voice note, a voicemail, or a recorded phone call).
    
    CRITICAL MULTILINGUAL & ACCESSIBILITY INSTRUCTIONS:
    1. Listen to the audio and identify the exact language being spoken (e.g., Hindi, Marathi, English).
    2. Write your response entirely in that detected language.
    3. Evaluate the transcript and tone for social engineering, "vishing" (voice phishing), false urgency (e.g., fake police or bank manager), or scam tactics.
    4. DO NOT use technical jargon. Use simple words like "खतरा" (Danger) or "सावधान रहें" (Be careful).

    Return ONLY a valid JSON object matching this exact structure:
    {
      "status": "Must be exactly 'SAFE' or 'THREAT' in English",
      "verdict": "A short, simple warning or all-clear in the user's spoken language.",
      "reason": "Explain the trick or safety of the audio in very simple terms in the spoken language."
    }`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            prompt,
            { inlineData: { data: audioBase64, mimeType: mimeType } }
        ],
        config: {
            responseMimeType: "application/json",
        }
    });

    if (!response.text) throw new Error("No response from AI");

    const result = JSON.parse(response.text);
    return NextResponse.json(result);

  } catch (error: any) {
    console.error("Audio AI Error:", error);
    return NextResponse.json({ verdict: "Error", reason: error.message || "Could not process the audio file." }, { status: 500 });
  }
}