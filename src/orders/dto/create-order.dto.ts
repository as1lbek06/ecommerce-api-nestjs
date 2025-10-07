import { IsArray, IsString, IsOptional, ValidateNested, IsUUID, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class OrderItemDto {
  @ApiProperty({ example: 'product-uuid' })
  @IsUUID()
  productId: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @Min(1)
  quantity: number;
}

export class CreateOrderDto {
  @ApiProperty({ 
    type: [OrderItemDto],
    example: [{ productId: 'product-uuid', quantity: 2 }]
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @ApiProperty({ example: 'Toshkent, Yunusobod tumani, 5-kvartal' })
  @IsString()
  shippingAddress: string;

  @ApiProperty({ example: 'Eshik oldiga qoldiring', required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}
