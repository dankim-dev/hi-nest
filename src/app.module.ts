import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 데코레이터 모듈 : 클래스에 함수 기능 추가 가능
// AppModule is a class
// Decorator can add functionality to class

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
