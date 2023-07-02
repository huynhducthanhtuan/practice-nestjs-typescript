import { File } from 'multer';
import { Injectable } from '@nestjs/common';
import { STORAGE_FILE_EXPIRE_DAY } from 'src/constants';
import { firebaseAdmin } from 'src/configs/firebase.config';

@Injectable()
export class FileService {
  async uploadFile(file: File) {
    const bucket = firebaseAdmin.storage().bucket();
    const { buffer, originalname } = file;

    const fileUpload = bucket.file(originalname);

    const options = {
      metadata: {
        contentType: file.mimetype
      }
    };

    await fileUpload.save(buffer, options);

    const downloadUrl = await fileUpload.getSignedUrl({
      action: 'read',
      expires: STORAGE_FILE_EXPIRE_DAY
    });

    return downloadUrl[0];
  }
}
