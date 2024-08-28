// src/utils/anthropicService.ts

import axios from 'axios';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/completions'; // Update with the correct endpoint if different

interface AnthropicResponse {
  completion: {
    text: string;
  };
  metadata?: any; // Adjust type as needed based on the response
}

export const fetchAnthropicAnalysis = async (errorDetails: string): Promise<string> => {
  try {
    const response = await axios.post<AnthropicResponse>(ANTHROPIC_API_URL, {
      model: 'claude-3', // Update with the correct model name
      prompt: `You are a JavaScript expert. Error message: ${errorDetails}. Explain the error message.`,
      max_tokens: 1000, // Adjust token count as needed
      temperature: 0.7, // Adjust temperature for randomness
      stop: '\n', // Optional: add stop sequences if needed
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.ANTHROPIC_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Anthropic API Response:', response.data);
    return response.data.completion.text || 'No analysis provided.';
  } catch (error) {
    console.error('Error fetching Anthropic analysis:', error);
    if (error instanceof Error) {
      return `Error: ${error.message}`;
    }
    return 'An unknown error occurred.';
  }
};

export default fetchAnthropicAnalysis;
