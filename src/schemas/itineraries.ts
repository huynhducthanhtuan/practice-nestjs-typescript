import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { TravelType } from 'src/utils';
import { ApiProperty } from '@nestjs/swagger';

export type ItineraryDocument = HydratedDocument<Itinerary>;

@Schema({ timestamps: true })
export class Itinerary {
  @ApiProperty({ type: Number, default: 0 })
  @Prop({ default: 0 })
  cost: number;

  @ApiProperty({ type: Number, default: 1 })
  @Prop({ default: 1 })
  people: number;

  @ApiProperty({ type: Number, default: TravelType.ALL, enum: TravelType })
  @Prop({ default: TravelType.ALL })
  type: TravelType;

  @ApiProperty({ type: Array })
  @Prop({ type: [mongoose.Schema.Types.Mixed] })
  routes: [];

  @ApiProperty({ type: Boolean, default: false })
  @Prop({ type: Boolean, default: false })
  isPublic: boolean;

  @ApiProperty({ type: String, required: false })
  @Prop({ required: false })
  name: string;

  @ApiProperty({ type: mongoose.Schema.Types.ObjectId, required: false })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: false })
  accountId: ObjectId;

  @ApiProperty({ type: Date, default: new Date() })
  @Prop({ default: new Date() })
  startDate: Date;

  @ApiProperty({ type: Date, default: new Date() })
  @Prop({ default: new Date() })
  endDate: Date;
}

export const ItinerarySchema = SchemaFactory.createForClass(Itinerary);
