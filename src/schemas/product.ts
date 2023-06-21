import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Actor, ProductDate } from 'src/types/models';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ type: String, default: "Product" })
  productId: string;

  @Prop({ type: String })
  productName: string;

  @Prop({ type: [String] })
  image: [string];

  @Prop({ type: [Object] })
  dates: ProductDate[];

  @Prop({ type: String })
  expireTime: string;

  @Prop({ type: String })
  price: string;

  @Prop({ type: String })
  amount: string;

  @Prop({ type: String })
  unit: string;

  @Prop({ type: String })
  status: string;

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
