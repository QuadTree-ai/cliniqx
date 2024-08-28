import { NextApiRequest } from 'next';
import formidable from 'formidable';

export const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = new formidable.IncomingForm({
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5 MB
    allowEmptyFiles: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(new Error(`Formidable parse error: ${err.message}`));
      } else {
        resolve({ fields, files });
      }
    });
  });
};
