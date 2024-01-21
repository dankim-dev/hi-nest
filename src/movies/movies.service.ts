import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
// database part but fake on this course
@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
        // real database에서는 query가 이곳에 옴
    }

    getOne(id:string): Movie {
        const movie = this.movies.find(movie => movie.id === parseInt(id));
        if(!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
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
