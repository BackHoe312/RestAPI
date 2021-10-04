import { IsNumber, IsString } from "class-validator";

export class CreateMovieDto {


    @IsString() // input값의 유효성 검사
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsString({ each: true })
    readonly genres: string[];
}