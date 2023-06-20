import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { OpeningHours } from 'src/utils';

export type LocationDocument = HydratedDocument<Location>;

export class Location {
  @ApiProperty({ type: String })
  @Prop()
  name: string;

  @ApiProperty({ type: String })
  @Prop()
  overview: string;

  @ApiProperty({ type: [String] })
  @Prop()
  weekday_text: string[];

  @ApiProperty({ type: Object })
  @Prop({ type: Object })
  opening_hours: OpeningHours;

  @ApiProperty({ type: String })
  @Prop()
  formatted_address: string;

  @ApiProperty({ type: Number })
  @Prop()
  latitude: number;

  @ApiProperty({ type: Number })
  @Prop()
  longitude: number;

  @ApiProperty({ type: [Object] })
  @Prop()
  reviews: object[];

  @ApiProperty({ type: [String] })
  @Prop()
  types: string[];

  @ApiProperty({ type: Number })
  @Prop()
  stayTime: number;

  @ApiProperty({ type: Number })
  @Prop()
  delayTime: number;

  @ApiProperty({ type: Number })
  @Prop()
  cost: number;

  @ApiProperty({ type: [String] })
  @Prop()
  period: string[];

  @ApiProperty({ type: Number })
  @Prop()
  user_ratings_total: number;

  @ApiProperty({ type: Number })
  @Prop()
  rating: number;

  @ApiProperty({ type: [{ photo_reference: String }] })
  @Prop()
  photos: { photo_reference: string }[];

  @ApiProperty({ type: Date })
  @Prop()
  createdAt: Date;

  @ApiProperty({ type: Date })
  @Prop()
  updatedAt: Date;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
