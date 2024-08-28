import fetchVertexAnalysis from "./vertexService";
import fetchAnthropicAnalysis from "./anthropicService";
import fetchOpenaiAnalysis from "./openaiService";
import { ChatOpenAI } from '@langchain/openai';
import { LangChainAdapter } from 'ai';
import { getMedicalReportData } from './extractData'; // Import your data extraction function

export const maxDuration = 60;

interface AnalysisResult {
  vertex: string;
  anthropic: string;
  openai: string;
  simplified: string;
}

async function getSimplifiedData(data: string, services: string[]): Promise<string> {
  const model = new ChatOpenAI({
    model: 'gpt-3.5-turbo-0125',
    temperature: 0,
  });

  const messages = [
    {
      role: 'user',
      content: `Simplify the following data based on the results from the following AI services: ${services.join(', ')}. Data: ${data}`,
    },
  ];

  const response = await model.generate(messages);

  return response.choices[0]?.message?.content || 'No simplified result provided.';
}

export async function analyzeAndSimplifyData(reportId: string, services: string[]): Promise<AnalysisResult> {
  try {
    // Retrieve the data from MongoDB
    const data = await getMedicalReportData(reportId);

    // Perform analyses with the different AI services
    const [vertexResult, anthropicResult, openaiResult] = await Promise.all([
      fetchVertexAnalysis(data),
      fetchAnthropicAnalysis(data),
      fetchOpenaiAnalysis(data),
    ]);

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
