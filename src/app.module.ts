import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';


// 데코레이터 모듈 : 클래스에 함수 기능 추가 가능
// AppModule is a class
// Decorator can add functionality to class
// 우리가 하는 모든 걸 앱모듈에 import

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
