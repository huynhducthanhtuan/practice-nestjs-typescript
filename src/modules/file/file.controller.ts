import { join } from 'path';
import { File } from 'multer';
import { Response } from 'express';
import { UploadFileDto } from './dto';
import { createReadStream } from 'fs';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  Res,
  Get,
  Post,
  Body,
  Header,
  HttpCode,
  Controller,
  UploadedFile,
  StreamableFile,
  UseInterceptors
} from '@nestjs/common';

@ApiTags('Files')
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  // Access this URL => View file in web page
  @ApiOperation({ summary: 'View file README.md' })
  @Header('Content-Type', 'application/json')
  @Get('/view/README.md')
  @HttpCode(200)
  @HttpCode(400)
  getStaticFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'README.md'));
    return new StreamableFile(file);
  }

  // Access this URL => Download file
  @ApiOperation({ summary: 'View file SECURITY.md' })
  @Get('/view/SECURITY.md')
  @HttpCode(200)
  @HttpCode(400)
  getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'SECURITY.md'));
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="SECURITY.md"'
    });
    return new StreamableFile(file);
  }

  @ApiOperation({ summary: 'Upload Image File' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @Post('/upload')
  @HttpCode(200)
  @HttpCode(400)
  async uploadFile(@UploadedFile() file: File, @Body() dto: UploadFileDto) {
    try {
      const publicFileLink = await this.fileService.uploadFile(file);
      return {
        message: 'Success',
        data: publicFileLink
      };
    } catch (error: any) {
      return {
        message: 'Failed',
        data: null
      };
    }
  }
}
