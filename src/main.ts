import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from'./middleware/logger.middleware';
import * as express from'express';
import { TransformInterceptor } from'./interceptor/transform.interceptor';
import { HttpExceptionFilter } from'./filter/http-exception.filter';
import { AllExceptionsFilter } from'./filter/any-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.json()); // For parsing application/json
  app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
  app.use(logger);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalFilters(new HttpExceptionFilter());

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('nest-demo')
    .setDescription('The nest-demo API description')
    .setVersion('1.0')
    .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);
  await app.listen(3000);
}
bootstrap();
