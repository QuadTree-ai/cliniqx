import { Configuration, OpenAIApi } from 'openai';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const fetchOpenaiAnalysis = async (textData: string): Promise<string> => {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo', // Use the correct model name if needed
      messages: [{ role: 'user', content: textData }],
      max_tokens: 1000,
    });

    const message = response.data.choices[0]?.message?.content || 'No analysis provided.';
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
