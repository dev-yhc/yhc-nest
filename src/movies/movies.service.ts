import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string) {
        const movie = this.movies.find(movie => movie.id === +id);
        if(!movie) {
            throw new NotFoundException(`Movie with ${id} not found`);
        }
        return movie;
    }

    deleteOne(id: string) {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== +id);
        return true;
    }

    create(createMovieDto: CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1,
            ...createMovieDto
        })
    }

    updateOne(id: string, updateMovieDto: UpdateMovieDto) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({
            ...movie,
            ...updateMovieDto,
        })
    }
}
