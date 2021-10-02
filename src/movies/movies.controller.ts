import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get('search')
    search(@Query("year") searchingYear: string) {
        return `We are searching for a moive made after: ${searchingYear}`;
    }

    @Get(':id')
    getOne(@Param('id') movieId: string) {
        return `This will return one movie with thie id: ${movieId}`;
    }
        
    @Post()
    create(@Body() movieData) {
        console.log(movieData);
        return movieData;
    }

    @Delete(':id')
    remove(@Param('id') movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    // @Put() // Put은 리소스 모든 부분을 업데이트함.

    @Patch(':id')  // 리소스의 일부분만 업데이트함
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updatedMovie: movieId,
            ...updateData,
        };
    }
}
