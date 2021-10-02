import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({ // 데코레이터
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
