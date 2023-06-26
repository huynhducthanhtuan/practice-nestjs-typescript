import { v4 as uuidv4 } from 'uuid';
import { HydratedDocument } from 'mongoose';
import { ProductStatus } from 'src/types/types';
import { Actor, ProductDate } from 'src/types/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ type: String, default: uuidv4 })
  productId: string;

  @Prop({ type: String })
  productName: string;

  @Prop({ type: [String], default: [] })
  image: [string];

  @Prop({ type: [Object], default: [] })
  dates: ProductDate[];

  @Prop({ type: String })
  expireTime: string;

  @Prop({ type: String })
  price: string;

  @Prop({ type: String })
  amount: string;

  @Prop({ type: String })
  unit: string;

  @Prop({ type: String, default: 'CULTIVATED' })
  status: ProductStatus;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  certificateUrl: string;

  @Prop({ type: Object })
  supplier: Actor;

  @Prop({ type: String })
  qrCode: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
