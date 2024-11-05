// formidableParse.ts
import { NextApiRequest } from 'next';
import formidable, { Fields, Files, Options } from 'formidable';

interface ParsedForm {
  fields: Fields;
  files: Files;
}

export class FormParser {
  private static readonly DEFAULT_OPTIONS: Options = {
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    maxFields: 1000,
    allowEmptyFiles: false,
    multiples: true,
  };

  static async parseForm(
    req: NextApiRequest,
    options: Partial<Options> = {}
  ): Promise<ParsedForm> {
    const form = formidable({
      ...FormParser.DEFAULT_OPTIONS,
      ...options,
    });

    try {
      const [fields, files] = await form.parse(req);
      return { fields, files };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Form parsing failed: ${errorMessage}`);
    }
  }
}