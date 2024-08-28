import fetch from 'node-fetch';

// Define the interface for the OpenAI response data
interface OpenAIResponse {
  choices: Array<{ text: string }>;
  // Add more fields if needed
}

// Function to fetch analysis from OpenAI
export const fetchOpenaiAnalysis = async (textData: string): Promise<OpenAIResponse> => {
  const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer YOUR_API_KEY`, // Replace with your OpenAI API key
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: textData,
      max_tokens: 100,
    }),
  });

  if (!response.ok) {
    const responseData = await response.json();
    throw new Error(`OpenAI API Error: ${responseData.error.message}`);
  }

  const responseData: OpenAIResponse = await response.json();
  console.log('OpenAI API Response:', responseData);
  return responseData;
};

// Function to handle API errors
export const handleApiError = (error: Error): void => {
  console.error('API Error:', error.message || error);
  // Handle additional error logging or user notifications if needed
};
