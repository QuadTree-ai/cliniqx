// src/utils/fetchOpenaiAnalysis.ts

import OpenAI from 'openai';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Ensure that the API key is provided
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('OpenAI API key is not set in environment variables');
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: apiKey,
});

export const fetchOpenaiAnalysis = async (textData: string): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: `Analyze the following medical report and identify any potential health issues. Specify the problem, the associated body part, and its severity (low, moderate, high):\n\n${textData}`,
      }],
      max_tokens: 1000,
    });

    // Check if the choices array and the first choice are not null
    const choice = completion.choices?.[0];
    if (choice && choice.message && choice.message.content) {
      return choice.message.content.trim();
    } else {
      return 'No analysis provided.';
    }
  } catch (error) {
    console.error('Error fetching OpenAI analysis:', error);
    return 'Error fetching analysis.';
  }
};

export default openai;
