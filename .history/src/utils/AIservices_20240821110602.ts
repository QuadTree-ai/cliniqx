import fetchVertexAnalysis from './vertexService';
import fetchAnthropicAnalysis from './anthropicService';
import fetchOpenaiAnalysis from './openaiService';
import { ChatOpenAI } from '@langchain/openai';

// Define a function to get medical report data (stub implementation)
export async function getMedicalReportData(reportId: string): Promise<string | undefined> {
  // Replace with actual data retrieval logic
  const db = await getDb(); // Assuming getDb is defined and imports MongoDB client
  const report = await db.collection('reports').findOne({ _id: new ObjectId(reportId) });
  return report?.insights;
}

// Define a priority order for AI services
const AI_SERVICES = [
  { name: 'OpenAI', func: fetchOpenaiAnalysis },
  { name: 'Vertex AI', func: fetchVertexAnalysis },
  { name: 'Anthropic', func: fetchAnthropicAnalysis },
  { name: 'LangChain', func: async (text: string) => {
    const model = new ChatOpenAI({
      model: 'gpt-3.5-turbo-0125',
      temperature: 0,
    });

    // Use the appropriate method to send the request
    const result = await model.generate({
      prompt: text,
      max_tokens: 100, // Adjust as necessary
    });

    // Extract the text from the result
    return result.text; // Adjust according to actual response structure
  }},
];

export async function analyzeReport(reportId: string) {
  const reportData = await getMedicalReportData(reportId);

  if (!reportData) {
    throw new Error('Failed to retrieve medical report data.');
  }

  // Analyze with the first working AI service
  let result = '';
  for (const service of AI_SERVICES) {
    try {
      result = await service.func(reportData);
      break;
    } catch (error) {
      console.error(`${service.name} failed:`, error);
    }
  }

  // If multiple services are working, chain the responses
  for (const service of AI_SERVICES) {
    if (service.name !== AI_SERVICES[0].name) {
      try {
        result = await service.func(result);
      } catch (error) {
        console.error(`${service.name} failed during chaining:`, error);
      }
    }
  }

  return result;
}
