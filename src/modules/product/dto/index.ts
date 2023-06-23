import { ApiProperty } from '@nestjs/swagger';
import { ProductDate } from 'src/types/models';
import { ProductStatusArray } from 'src/types/types';
import { IsArray, IsEnum, IsString } from 'class-validator';

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

  @ApiProperty({ type: String, enum: ProductStatusArray })
  @IsEnum(ProductStatusArray)
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
