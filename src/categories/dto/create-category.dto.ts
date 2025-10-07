import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Smartfonlar' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Barcha smartfonlar va aksessuarlar' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'category.jpg', required: false })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({ example: true, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
