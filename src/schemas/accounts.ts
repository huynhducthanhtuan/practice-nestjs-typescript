import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AVATAR_DEFAULT } from 'src/constants';
import { Role } from 'src/utils';
import { ApiProperty } from '@nestjs/swagger';

export type AccountDocument = HydratedDocument<Account>;

@Schema({ timestamps: true })
export class Account {
  @ApiProperty({ type: String })
  @Prop()
  email: string;

  @ApiProperty({ type: String })
  @Prop()
  password: string;

  @ApiProperty({ type: String })
  @Prop()
  name: string;

  @ApiProperty({ type: Number, enum: Role, default: Role.TRAVELER })
  @Prop({ default: Role.TRAVELER })
  role: Role;

  @ApiProperty({ type: String, required: false })
  @Prop({ required: false })
  phone: string;

  @ApiProperty({ type: String, default: AVATAR_DEFAULT })
  @Prop({ default: AVATAR_DEFAULT })
  avatar: string;

  @ApiProperty({ type: Boolean, default: false })
  @Prop({ default: false })
  isConfirmed: boolean;

  @ApiProperty({ type: Boolean, default: true })
  @Prop({ default: true })
  isActive: boolean;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
