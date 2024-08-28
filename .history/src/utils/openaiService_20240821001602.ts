// src/utils/openaiService.ts
import fetch from 'node-fetch';

interface OpenAIResponse {
  choices: Array<{ text: string }>;
}

export const fetchOpenaiAnalysis = async (textData: string): Promise<string> => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Ensure this is set correctly
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4', // Use gpt-4 or any newer model
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

    return responseData.choices[0]?.text || 'No analysis provided.';
  } catch (error) {
    console.error('Error fetching OpenAI analysis:', error);
    if (error instanceof Error && error.message.includes('API key')) {
      return 'API key is missing. Please check your configuration.';
    }
    return 'Error fetching analysis.';
  }
};
