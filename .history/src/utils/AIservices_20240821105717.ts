import fetchVertexAnalysis from "./vertexService";
import fetchAnthropicAnalysis from "./anthropicService";
import fetchOpenaiAnalysis from "./openaiService";
import { ChatOpenAI } from '@langchain/openai';
import { LangChainAdapter } from 'ai';

// Helper function to determine the priority and simplified result
async function getSimplifiedData(data: string, services: string[]): Promise<string> {
  const model = new ChatOpenAI({
    model: 'gpt-3.5-turbo-0125',
    temperature: 0,
  });

  const stream = await model.stream({
    prompt: `Simplify the following data based on the results from the following AI services: ${services.join(', ')}. Data: ${data}`,
  });

  return LangChainAdapter.toDataStreamResponse(stream);
}

export async function analyzeAndSimplifyData(reportId: string, services: string[]) {
  try {
    const data = await getMedicalReportData(reportId);
    const results = await Promise.all([
      fetchVertexAnalysis(data),
      fetchAnthropicAnalysis(data),
      fetchOpenaiAnalysis(data),
    ]);

    const [vertexResult, anthropicResult, openaiResult] = results;

    console.log('Vertex Analysis:', vertexResult);
    console.log('Anthropic Analysis:', anthropicResult);
    console.log('OpenAI Analysis:', openaiResult);

    // Determine the priority and get the simplified data
    const simplifiedData = await getSimplifiedData(data, services);

    return {
      vertex: vertexResult,
      anthropic: anthropicResult,
      openai: openaiResult,
      simplified: simplifiedData,
    };
  } catch (error) {
    console.error('Error processing medical data:', error);
    throw error;
  }
}
