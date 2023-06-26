import { join } from 'path';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get, StreamableFile, Res, Header, HttpCode } from '@nestjs/common';

@ApiTags('File Streaming')
@Controller('file')
export class FileStreamingController {
  // Access this URL => View file in web page
  @ApiOperation({ summary: 'View file README.md' })
  @Header('Content-Type', 'application/json')
  @Get('/README.md')
  @HttpCode(200)
  @HttpCode(400)
  getStaticFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'README.md'));
    return new StreamableFile(file);
  }

  // Access this URL => Download file
  @ApiOperation({ summary: 'View file SECURITY.md' })
  @Get('/SECURITY.md')
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
}
