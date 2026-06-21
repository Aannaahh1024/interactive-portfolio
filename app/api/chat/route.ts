import { createGroq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from '@/lib/prompt';

export const maxDuration = 30;

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return new Response('GROQ_API_KEY is not set', { status: 500 });
  }

  const { messages } = await req.json();

  const groq = createGroq({ apiKey });

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    system: SYSTEM_PROMPT,
    messages,
    maxTokens: 900,
    temperature: 0.75,
  });

  return result.toDataStreamResponse();
}
