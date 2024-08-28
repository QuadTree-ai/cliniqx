// src/utils/openaiService.ts
import fetch from 'node-fetch';

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
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'davinci-002', // Ensure this model is available and you have access to it
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
