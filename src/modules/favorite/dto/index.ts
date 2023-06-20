import { IsOptional, IsString } from 'class-validator';
import { Category, Pagination, TravelType } from 'src/utils';
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
  category: Category;
}

export class ItineraryQueryDto extends Pagination {
  @ApiProperty({ type: Number })
  @IsOptional()
  people: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  days: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  type: TravelType;
}
