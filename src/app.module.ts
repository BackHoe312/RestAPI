import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({ // 데코레이터. 데코레이터는 꾸며주는 함수나 클래스랑 부텅있어야 함
  imports: [],
  controllers: [MoviesController], // URL을 가져오고 함수를 실행 (=express.js의 controller/router)
  providers: [MoviesService], // 실질적으로 사용하는 함수를 정의하는 부분
})
export class AppModule {}
