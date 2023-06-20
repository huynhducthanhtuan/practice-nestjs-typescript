import { HOST, PORT } from './constants';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './config/logger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('SwaggerUI')
    .setDescription('A Simple Express Library API')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(PORT);

  const logger = new Logger('DaNaTravel');
  logger.log(`Application is running on http://${HOST}:${PORT}`);
  logger.log(`Swagger Documentation is running on http://${HOST}:${PORT}/api-docs`);
}

bootstrap();
