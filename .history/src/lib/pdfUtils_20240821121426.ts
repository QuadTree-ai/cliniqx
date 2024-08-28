import fs from 'fs';
import pdfParse from 'pdf-parse';

/**
 * Extracts text from a PDF file located at the given file path.
 * @param {string} filePath - The file path of the PDF file.
 * @returns {Promise<string>} - A promise that resolves to the extracted text.
 */
export async function extractTextFromPDF(filePath: string): Promise<string> {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text;
}
