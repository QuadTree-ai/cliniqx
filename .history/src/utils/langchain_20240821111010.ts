// src/pages/api/langchain.ts

import { ChatOpenAI } from '@langchain/openai';
import { LangChainAdapter } from 'ai';

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { prompt } = await req.json();

    if (typeof prompt !== 'string') {
      return new Response(JSON.stringify({ message: 'Invalid prompt' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Initialize the ChatOpenAI model
    const model = new ChatOpenAI({
      model: 'gpt-3.5-turbo-0125',
      temperature: 0,
    });

    // Stream the response from the model
    const stream = await model.stream(prompt);

    // Convert the stream to a format suitable for the response
    const dataStreamResponse = LangChainAdapter.toDataStreamResponse(stream);

    return new Response(JSON.stringify(dataStreamResponse), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
