import { NestFactory } from '@nestjs/core';
import setupApplication from './configuration/setupApplication';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await setupApplication(app);
}
bootstrap();
