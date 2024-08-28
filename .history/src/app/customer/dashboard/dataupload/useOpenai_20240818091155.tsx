import { useState } from 'react';
import OpenAI from 'openai';

const useOpenai = () => {
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const fetchResponse = async (userMessage: string) => {
        setLoading(true);
        setError(null);
        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: userMessage },
                ],
            });
    
            if (completion.choices && completion.choices.length > 0 && completion.choices[0].message) {
                // Ensure you are accessing the correct property from the message
                const messageContent = completion.choices[0].message.content; // Adjusted assuming the message contains a 'content' field
                if (typeof messageContent === 'string') {
                    setResponse(messageContent);
                } else {
                    setError("Received non-string response");
                    setResponse(null);
                }
            } else {
                setError("No response from OpenAI.");
                setResponse(null);
            }
        } catch (error: any) {
            setError('Failed to fetch data from OpenAI: ' + error.message);
            setResponse(null);
        } finally {
            setLoading(false);
        }
    };
    

    return { response, loading, error, fetchResponse };
};

export default useOpenai;
