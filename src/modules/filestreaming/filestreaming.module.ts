import { Module } from '@nestjs/common';
import { FileStreamingController } from './filestreaming.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [FileStreamingController]
})
export class FileStreamingModule {}
