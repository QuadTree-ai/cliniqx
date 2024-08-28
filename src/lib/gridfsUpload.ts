import { Db, GridFSBucket } from 'mongodb';
import { ReadStream } from 'fs';

/**
 * Uploads a file stream to GridFS.
 * @param {Db} db - The database connection.
 * @param {ReadStream} fileStream - The file stream to upload.
 * @param {string} filename - The name of the file.
 * @param {string} contentType - The MIME type of the file.
 * @returns {Promise<string>} - The ID of the uploaded file.
 */
export async function uploadToGridFS(db: Db, fileStream: ReadStream, filename: string, contentType: string): Promise<string> {
    const bucket = new GridFSBucket(db, { bucketName: 'uploads' });
    const uploadStream = bucket.openUploadStream(filename, { contentType });
    fileStream.pipe(uploadStream);

    return new Promise((resolve, reject) => {
        uploadStream.on('finish', () => resolve(uploadStream.id.toString()));
        uploadStream.on('error', reject);
    });
}
