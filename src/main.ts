import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // 아무 decorator도 없는 어떠한 property의 object를 거른다.
    forbidNonWhitelisted: true, // 이상한 요소를 전송하면 request 자체를 막아버림
    transform: true, // 개발자가 의도한 타입으로 변환해준다.

  }));
  await app.listen(3000);
}
bootstrap();
