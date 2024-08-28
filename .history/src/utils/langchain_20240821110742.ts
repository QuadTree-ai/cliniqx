import type { NextApiRequest, NextApiResponse } from 'next';
import { ChatOpenAI } from '@langchain/openai';

// Define maximum duration for processing (optional configuration)
export const maxDuration = 60;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Extract prompt from request body
    const { prompt } = req.body;
    if (typeof prompt !== 'string') {
      return res.status(400).json({ message: 'Invalid prompt' });
    }

    // Initialize the ChatOpenAI model
    const model = new ChatOpenAI({
      model: 'gpt-3.5-turbo-0125',
      temperature: 0,
    });

    // Send the prompt to the model
    const response = await model.generate({
      messages: [{ role: 'user', content: prompt }],
    });

    // Extract the generated text from the response
    const generatedText = response.text || 'No response content';

    // Send the generated text as a JSON response
    res.status(200).json({ text: generatedText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
