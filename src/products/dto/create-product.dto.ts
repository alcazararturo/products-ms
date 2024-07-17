import {Type} from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name        : string;
    @IsString()
    description: string;
    @IsNumber({
        maxDecimalPlaces: 4,
    })
    @Min(0)
    @Type( () => Number )
    price       : number;
    
}