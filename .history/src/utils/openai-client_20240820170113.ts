import OpenAI from 'openai';

// Ensure that the API key is provided
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('OpenAI API key is not set in environment variables');
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: apiKey,
});

export default openai;
