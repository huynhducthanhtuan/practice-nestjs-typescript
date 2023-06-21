import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FavoriteDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  locationId: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  itineraryId: string;
}

export class ListsFavoriteDto {
  @ApiProperty({ type: String })
  @IsString()
  accountId: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  category: string;
}
