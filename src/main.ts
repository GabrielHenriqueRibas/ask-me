import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Versionamento
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Swagger
  const config = new DocumentBuilder()
  .setTitle('AskMe API')
  .setDescription('Documentação da API de dúvidas escolares')
  .setVersion('1.0')
  .addTag('duvidas')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Pipes globais
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Filtro global
  app.useGlobalFilters(new GlobalExceptionFilter());

  // Arquivos estáticos (views/)
  app.use(express.static(join(process.cwd(), 'views')));

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

bootstrap();
