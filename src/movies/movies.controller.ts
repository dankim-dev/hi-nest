import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
// `nest go co` in terminal
@Controller('movies') // 이 부분이 url의 Entry Point를 컨트롤
export class MoviesController {
    @Get()
    getAll(){
        return 'This will return all movies';
    }

    @Get("/:id")
    getOne(@Param('id') movieId:string) {
        return `This will return one movie with the id: ${movieId}`;
    } // 파라미터 요청을 통해 원하는 것을 얻을 수 있음, 저 @Get에 있는 id와 @Param의 id는 지금처럼 이름이 같아야 함!

    @Post()
    create() {
        return 'This will create a movie';
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch('/:id') // 일부분만 업데이트할 시 @Patch 사용, 전체 업데이트는 @Put
    path(@Param('id') movieId: string) {
        return `This will patch a movie with the id: ${movieId}`;
    }
}

