// src/utils/openaiService.ts
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

interface OpenAIChoice {
  message: {
    content: string;
  };
}

interface OpenAIResponse {
  choices: Array<OpenAIChoice>;
}

export const fetchOpenaiAnalysis = async (textData: string): Promise<string> => {
  try {
    // Ensure the API key is available
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('API key not found. Please set the OPENAI_API_KEY environment variable.');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // Ensure this model is available and you have access to it
        messages: [{ role: 'user', content: textData }],
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(`OpenAI API Error: ${responseData.error.message}`);
    }

    const responseData: OpenAIResponse = await response.json();
    console.log('OpenAI API Response:', responseData);

    return responseData.choices[0]?.message.content || 'No analysis provided.';
  } catch (error) {
    console.error('Error fetching OpenAI analysis:', error);
    if (error instanceof Error && error.message.includes('model')) {
      return 'Model not available or you do not have access to it.';
    }
    return 'Error fetching analysis.';
  }
};
