import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  static getConfig(app: INestApplication) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('SwaggerUI')
      .setDescription('A Simple Express Library API')
      .setVersion('1.0.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    return document;
  }
}
