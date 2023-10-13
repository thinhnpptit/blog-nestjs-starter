import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: ['log', 'debug', 'verbose'],
  });

  // Apply middlewares
  app.use(cookieParser());

  await app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}
bootstrap();
