import { HOST, PORT } from './constants';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerConfig } from './configs/swagger.config';
import { LoggingInterceptor } from './configs/logger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.enableCors();

  const swaggerDocument = SwaggerConfig.getConfig(app);
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  await app.listen(PORT);

  const logger = new Logger('Logger');
  logger.log(`Application is running on http://${HOST}:${PORT}`);
  logger.log(`Swagger Documentation is running on http://${HOST}:${PORT}/api-docs`);
}

bootstrap();
