import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './enitities/movie.enitity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] { 
        return this.movies;
    }

    getOne(id: string): Movie {
        // return this.movies.find(movie => movie.id === parseInt(id));
        // return this.movies.find(movie => movie.id === +id);
        const movie = this.movies.find(movie => movie.id === +id);
        if(!movie) {
            throw new NotFoundException(`Movie with ID: ${id} not found.`);
        }
        return movie;
    }

    deleteOne(id: string) {
        // this.movies.filter(movie => movie.id !== +id);
        // return true;
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== +id);
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }

    update(id: string, updateData) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData})
    }
}
