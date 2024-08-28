import { OpenAI } from 'openai';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const fetchOpenaiAnalysis = async (textData: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini-2024-07-18', // or 'gpt-4' if you have access
      messages: [{ role: 'user', content: textData }],
      max_tokens: 1000,
    });

    const message = response.choices[0]?.message?.content || 'No analysis provided.';
    console.log('OpenAI API Response:', message);

    return message;
  } catch (error) {
    console.error('Error fetching OpenAI analysis:', error);
    if (error instanceof Error) {
      return `Error: ${error.message}`;
    }
    return 'An unknown error occurred.';
  }
};

export default fetchOpenaiAnalysis;
