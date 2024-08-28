import { NextApiRequest } from 'next';
// Import based on the specific version and compatibility
import formidable, { IncomingForm } from 'formidable';  // Adjust this line based on the version and module system

export const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = new IncomingForm({
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5 MB
    allowEmptyFiles: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(new Error(`Formidable parse error: ${err.message}`));
      else resolve({ fields, files });
    });
  });
};
