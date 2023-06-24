import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  static configure(app: INestApplication) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('SwaggerUI')
      .setDescription('A Simple Express Library API')
      .setVersion('1.0.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);

    // Enable authorization button in Swagger UI
    document.security = [{ bearerAuth: [] }];

    // Set global authorization header
    document.components.securitySchemes = {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    };

    SwaggerModule.setup('api-docs', app, document);
  }
}
