import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); //Esto hace que tengamos que poner /api ante de cada query
  await app.listen(3000);
}
bootstrap();
