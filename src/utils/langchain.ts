// src/pages/api/langchain.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { ChatOpenAI } from '@langchain/openai';
import { LangChainAdapter } from 'ai'; // Ensure this import is correctly pointing to the actual module.

export const maxDuration = 60; // This could be used to set a timeout if applicable

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Ensure the request body is parsed correctly
    const { prompt } = req.body;

    // Validate the prompt to ensure it's a string
    if (typeof prompt !== 'string' || prompt.trim() === '') {
      return res.status(400).json({ message: 'Invalid prompt: Prompt must be a non-empty string.' });
    }

    // Initialize the ChatOpenAI model with specified settings
    const model = new ChatOpenAI({
      model: 'gpt-3.5-turbo-0125',
      temperature: 0, // Using 0 to get deterministic responses, adjust as needed
    });

    // Stream the response from the model using the prompt
    const stream = await model.stream(prompt);

    // Convert the stream to a format suitable for the response
    const dataStreamResponse = LangChainAdapter.toDataStreamResponse(stream);

    // Return the formatted data as JSON
    return res.status(200).json(dataStreamResponse);
  } catch (error) {
    console.error('Error processing request:', error);
    // Send a more user-friendly error message and log the actual error
    return res.status(500).json({ message: 'Internal Server Error. Please try again later.' });
  }
}
