import { cloudinary } from "../lib/cloudinary.js";
import type { UploadApiResponse, UploadApiOptions } from "cloudinary";

export class CloudinaryService {
  async upload(
    filePath: string,
    options?: UploadApiOptions
  ): Promise<UploadApiResponse> {
    return cloudinary.uploader.upload(filePath, {
      folder: "sge",
      ...options,
    });
  }

  async uploadBuffer(
    buffer: Buffer,
    options?: UploadApiOptions
  ): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "sge", ...options },
        (err, result) => {
          if (err || !result) reject(err ?? new Error("Upload failed"));
          else resolve(result);
        }
      );
      stream.end(buffer);
    });
  }

  async delete(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(publicId);
  }

  getUrl(publicId: string, transformations?: Record<string, unknown>): string {
    return cloudinary.url(publicId, {
      secure: true,
      ...transformations,
    });
  }

  getOptimizedUrl(publicId: string): string {
    return cloudinary.url(publicId, {
      secure: true,
      transformation: [{ f_auto: true, q_auto: "auto" }],
    });
  }
}
