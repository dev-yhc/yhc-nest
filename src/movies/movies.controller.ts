import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(
        private readonly moviesService: MoviesService
    ) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get("search")
    search(@Query("year") year: number) {

    }

    @Get("/:id")
    getOne(@Param("id") id: string): Movie {
        return this.moviesService.getOne(id);
    }

    @Delete(":id")
    deleteOne(@Param("id") id: string) {
        this.moviesService.deleteOne(id);
    }

    @Post()
    create(@Body() movieData: any) {
        return this.moviesService.create(movieData)
    }

    @Patch("/:id")
    update(@Param("id") id: string, @Body() movieDate: any) {
        return {
            movieId: id,
            ...movieDate
        }
    }
}
