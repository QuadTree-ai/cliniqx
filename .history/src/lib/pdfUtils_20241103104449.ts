// pdfUtils.ts
import fs from 'fs/promises';
import pdfParse from 'pdf-parse';

interface PDFExtractOptions {
  maxPages?: number;
  pageNumbers?: number[];
  throwOnError?: boolean;
}

export class PDFExtractor {
  static async extractText(
    filePath: string,
    options: PDFExtractOptions = {}
  ): Promise<string> {
    try {
      const dataBuffer = await fs.readFile(filePath);
      const data = await pdfParse(dataBuffer, {
        max: options.maxPages,
        pagerender: options.pageNumbers
          ? (pageData: any) => options.pageNumbers!.includes(pageData.pageNumber) ? '' : ''
          : undefined,
      });
      return data.text.trim();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      if (options.throwOnError) {
        throw new Error(`PDF extraction failed: ${errorMessage}`);
      }
      return '';
    }
  }
}