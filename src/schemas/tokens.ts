import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type TokenDocument = HydratedDocument<Token>;

@Schema({ timestamps: true })
export class Token {
  @ApiProperty({ type: String })
  @Prop()
  token: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
