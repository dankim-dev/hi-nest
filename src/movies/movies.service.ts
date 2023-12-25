import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
// database part but fake on this course
@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
        // real database에서는 query가 이곳에 옴
    }

    getOne(id:string):Movie {
        return this.movies.find(movie => movie.id === parseInt(id));
    }

    deleteOne(id:string):boolean {
        this.movies.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1, 
            ...movieData,
        });
    }
}
