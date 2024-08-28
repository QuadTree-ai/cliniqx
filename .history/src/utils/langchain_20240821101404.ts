// src/pages/api/langchain.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { ChatOpenAI } from '@langchain/openai';
import { LangChainAdapter } from 'ai';

export const maxDuration = 60;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { prompt } = req.body;
    if (typeof prompt !== 'string') {
      return res.status(400).json({ message: 'Invalid prompt' });
    }

    const model = new ChatOpenAI({
      model: 'gpt-3.5-turbo-0125',
      temperature: 0,
    });

    const stream = await model.stream(prompt);

    // Convert the stream to a format suitable for the response
    const dataStreamResponse = LangChainAdapter.toDataStreamResponse(stream);

    res.status(200).json(dataStreamResponse);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
