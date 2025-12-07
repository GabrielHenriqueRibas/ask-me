import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from '../common/filters/http-exception.filter';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- Versionamento da API (ID18) ---
  app.enableVersioning({
    type: VersioningType.URI, // URLs tipo: /v1/rotas
  });

  // --- Swagger (ID14) ---
  const config = new DocumentBuilder()
    .setTitle('AskMe API')
    .setDescription('Documentação da API de dúvidas escolares')
    .setVersion('1.0')
    .addTag('duvidas')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // --- Pipes Globais ---
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // --- Filtros Globais ---
  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
