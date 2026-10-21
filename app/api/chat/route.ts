import { createGroq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from '@/lib/prompt';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error('[api/chat] GROQ_API_KEY is not set');
      return new Response('GROQ_API_KEY is not set', { status: 500 });
    }

    const { messages } = await req.json();

    const groq = createGroq({ apiKey });

    const result = streamText({
      model: groq('openai/gpt-oss-120b'),
      system: SYSTEM_PROMPT,
      messages,
      maxTokens: 2000,
      temperature: 0.75,
      // Errors raised while streaming (bad key, retired model, rate limit) do not reach the catch below.
      onError: ({ error }) => {
        console.error('[api/chat] stream error:', error);
      },
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('[api/chat] request failed:', error);
    return new Response('Chat request failed', { status: 500 });
  }
}
