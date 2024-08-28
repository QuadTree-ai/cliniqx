// src/utils/openaiService.ts

// Define the interface for the OpenAI response data
interface OpenAIResponse {
    choices: Array<{ text: string }>;
    // Add more fields if needed
  }
  
  // Function to fetch analysis from OpenAI
  export const fetchOpenaiAnalysis = async (textData: string): Promise<string> => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Use environment variable for security
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
      
      // Return only the text content of the first choice
      return responseData.choices[0]?.text || 'No analysis provided.';
    } catch (error) {
      console.error('Error fetching OpenAI analysis:', error);
      // Check for quota-related errors
      if (error instanceof Error && error.message.includes('quota')) {
        return 'You have exceeded your quota. Please check your OpenAI plan and billing details.';
      }
      return 'Error fetching analysis.';
    }
  };
  
  // Function to handle API errors
  export const handleApiError = (error: Error): void => {
    console.error('API Error:', error.message || error);
    // Handle additional error logging or user notifications if needed
  };
  