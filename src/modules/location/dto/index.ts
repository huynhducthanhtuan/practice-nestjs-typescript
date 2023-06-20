import { IsArray, IsLatitude, IsLongitude, IsObject, IsOptional, IsString } from 'class-validator';
import { LocationType, OpeningHours, Pagination } from 'src/utils';
import { ApiProperty } from '@nestjs/swagger';

export class LocationQueryDto extends Pagination {
  @ApiProperty({ type: String })
  @IsOptional()
  keyword: string;

  @ApiProperty({ type: String })
  @IsOptional()
  types: LocationType;
}

export class LocationDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  overview: string;

  @ApiProperty({ type: Array })
  @IsArray()
  @IsOptional()
  weekday_text: string[];

  @ApiProperty({ type: Object })
  @IsObject()
  opening_hours: OpeningHours;

  @ApiProperty({ type: Array })
  @IsArray()
  @IsOptional()
  photos: { photo_reference: string }[];

  @ApiProperty({ type: String })
  @IsString()
  formatted_address: string;

  @ApiProperty({ type: Number })
  @IsLatitude()
  latitude: number;

  @ApiProperty({ type: Number })
  @IsLongitude()
  longitude: number;

  @ApiProperty({ type: Array })
  @IsArray()
  types: [];
}

export class LocationUpdateDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  overview: string;

  @ApiProperty({ type: Array })
  @IsArray()
  @IsOptional()
  weekday_text: string[];

  @ApiProperty({ type: Object })
  @IsObject()
  @IsOptional()
  opening_hours: OpeningHours;

  @ApiProperty({ type: Array })
  @IsArray()
  @IsOptional()
  photos: { photo_reference: string }[];

  @IsString()
  @IsOptional()
  formatted_address: string;

  @ApiProperty({ type: Number })
  @IsLatitude()
  @IsOptional()
  latitude: number;

  @ApiProperty({ type: Number })
  @IsLongitude()
  @IsOptional()
  longitude: number;

  @ApiProperty({ type: Array })
  @IsArray()
  @IsOptional()
  types: [];
}
