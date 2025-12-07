import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { join } from 'path';
import { FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import fastifyStatic from '@fastify/static';

async function bootstrap() {
  // AGORA USANDO O TIPO CORRETO
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // --- Versionamento da API (ID18) ---
  app.enableVersioning({
    type: VersioningType.URI,
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

  // --- Interceptor de Log ---
  app.useGlobalInterceptors(new LoggingInterceptor());

  // --- STATIC FILES (FASTIFY) ---
  await app.register(fastifyStatic, {
    root: join(__dirname, '..', 'public'),
    prefix: '/', 
  });

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
