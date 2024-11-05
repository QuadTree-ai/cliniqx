// gridfsUpload.ts
import { Db, GridFSBucket, ObjectId } from 'mongodb';
import { ReadStream } from 'fs';
import { Readable } from 'stream';

interface UploadOptions {
  metadata?: Record<string, unknown>;
  chunkSizeBytes?: number;
  contentType?: string;
}

interface UploadResult {
  fileId: string;
  filename: string;
  size: number;
  contentType: string;
}

export class GridFSManager {
  private bucket: GridFSBucket;

  constructor(db: Db, bucketName = 'uploads') {
    this.bucket = new GridFSBucket(db, { bucketName });
  }

  async uploadFile(
    fileStream: ReadStream | Readable,
    filename: string,
    options: UploadOptions = {}
  ): Promise<UploadResult> {
    return new Promise((resolve, reject) => {
      const uploadStream = this.bucket.openUploadStream(filename, {
        contentType: options.contentType,
        metadata: options.metadata,
        chunkSizeBytes: options.chunkSizeBytes,
      });

      let size = 0;
      fileStream.on('data', (chunk) => {
        size += chunk.length;
      });

      fileStream.pipe(uploadStream);

      uploadStream.on('finish', () => {
        resolve({
          fileId: uploadStream.id.toString(),
          filename,
          size,
          contentType: options.contentType ?? 'application/octet-stream',
        });
      });

      uploadStream.on('error', (error) => {
        reject(new Error(`File upload failed: ${error.message}`));
      });
    });
  }

  async deleteFile(fileId: string): Promise<void> {
    try {
      await this.bucket.delete(new ObjectId(fileId));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`File deletion failed: ${errorMessage}`);
    }
  }
}