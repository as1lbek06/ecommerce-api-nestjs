import { IsString, IsNumber, IsOptional, IsBoolean, IsArray, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'iPhone 14 Pro' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Eng yangi iPhone modeli' })
  @IsString()
  description: string;

  @ApiProperty({ example: 999.99 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 10 })
  @IsNumber()
  stock: number;

  @ApiProperty({ example: ['image1.jpg', 'image2.jpg'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @ApiProperty({ example: true, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ example: 'uuid' })
  @IsUUID()
  categoryId: string;
}
