import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Pagination, TravelType } from 'src/utils';
import { ApiProperty } from '@nestjs/swagger';

export class RouteQueryDto {
  @ApiProperty({ type: Number })
  @Type(() => Number)
  @IsNumber()
  latitude: number;

  @ApiProperty({ type: Number })
  @Type(() => Number)
  @IsNumber()
  longitude: number;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  startDate: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  endDate: string;

  @ApiProperty({ type: Number })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  people: number = 1;

  @ApiProperty({ type: Number })
  @IsOptional()
  @Type(() => Number)
  @IsEnum(TravelType)
  type: TravelType = TravelType.ALL;

  @ApiProperty({ type: Number })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minCost: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  maxCost: number;

  @ApiProperty({ type: Array })
  @IsOptional()
  points: string[];
}

export type Point = {
  _id: string;
  latitude: number;
  longitude: number;
};

export class UpdateItineraryDto {
  @ApiProperty({ type: Array })
  @IsOptional()
  routes: Point[][];

  @ApiProperty({ type: String })
  @IsOptional()
  name: string;

  @ApiProperty({ type: Boolean })
  @IsOptional()
  @Type(() => Boolean)
  isPublic: boolean;
}

export enum ACCESS {
  public = 'public',
  private = 'private',
}

export class ItinerariesByAccountQueryDto extends Pagination {
  @ApiProperty({ type: String })
  @IsOptional()
  keyword: string;

  @ApiProperty({ type: Boolean })
  @IsOptional()
  isPublic: boolean | string;

  @ApiProperty({ type: String })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ type: Number })
  @IsOptional()
  type: TravelType;

  @ApiProperty({ type: Number })
  @IsOptional()
  people: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  days: number;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsEnum(ACCESS)
  access: ACCESS = ACCESS.public;
}

export type Weather = { datetime: string; weather: string };
