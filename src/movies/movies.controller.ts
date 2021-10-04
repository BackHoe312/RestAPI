import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './enitities/movie.enitity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}
    
    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    // @Get('search')
    // search(@Query("year") searchingYear: string) {
    //     return `We are searching for a moive made after: ${searchingYear}`;
    // }

    @Get(':id')
    getOne(@Param('id') movieId: number): Movie {
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }
        
    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    // @Put() // Put은 리소스 모든 부분을 업데이트함.

    @Patch(':id')  // 리소스의 일부분만 업데이트함
    patch(@Param('id') movieId: number, @Body() updateData) {
        // return {
        //     updatedMovie: movieId,
        //     ...updateData,
        // };
        return this.moviesService.update(movieId, updateData);
    }
}
