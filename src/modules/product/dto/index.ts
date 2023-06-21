import { ProductDate } from './../../../types/models';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({ type: String })
  @IsString()
  productId: string;

  @ApiProperty({ type: String })
  @IsString()
  productName: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  image: [string];

  @ApiProperty({ type: [Object] })
  @IsArray()
  dates: ProductDate[];

  @ApiProperty({ type: String })
  @IsString()
  expireTime: string;

  @ApiProperty({ type: String })
  @IsString()
  price: string;

  @ApiProperty({ type: String })
  @IsString()
  amount: string;

  @ApiProperty({ type: String })
  @IsString()
  unit: string;

  @ApiProperty({ type: String })
  @IsString()
  status: string;

  @ApiProperty({ type: String })
  @IsString()
  description: string;

  @ApiProperty({ type: String })
  @IsString()
  certificateUrl: string;

  @ApiProperty({ type: Object })
  supplier: object;

  @ApiProperty({ type: String })
  @IsString()
  qrCode: string;
}

export class CreateProductDto {
  @ApiProperty({ type: String })
  @IsString()
  productName: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  image: [string];

  @ApiProperty({ type: [Object] })
  @IsArray()
  dates: ProductDate[];

  @ApiProperty({ type: String })
  @IsString()
  expireTime: string;

  @ApiProperty({ type: String })
  @IsString()
  price: string;

  @ApiProperty({ type: String })
  @IsString()
  amount: string;

  @ApiProperty({ type: String })
  @IsString()
  unit: string;

  @ApiProperty({ type: String })
  @IsString()
  status: string;

  @ApiProperty({ type: String })
  @IsString()
  description: string;

  @ApiProperty({ type: String })
  @IsString()
  certificateUrl: string;

  @ApiProperty({ type: Object })
  supplier: object;

  @ApiProperty({ type: String })
  @IsString()
  qrCode: string;
}
