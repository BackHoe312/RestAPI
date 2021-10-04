import { IsNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) { // PartialType()은 부분 타입

}