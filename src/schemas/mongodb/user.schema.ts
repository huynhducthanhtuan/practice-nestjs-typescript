import { v4 as uuidv4 } from 'uuid';
import { HydratedDocument } from 'mongoose';
import { ProductIdItem } from 'src/types/models';
import { UserRole, UserStatus } from 'src/types/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, default: uuidv4 })
  userId: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: String })
  userName: string;

  @Prop({ type: String })
  fullName: string;

  @Prop({ type: String })
  avatar: string;

  @Prop({ type: String })
  phoneNumber: string;

  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  role: UserRole;

  @Prop({ type: String, default: 'inactive' })
  status: UserStatus;

  @Prop({ type: String })
  signature: string;

  @Prop({ type: [Object], default: [] })
  cart: [ProductIdItem];
}

export const UserSchema = SchemaFactory.createForClass(User);
