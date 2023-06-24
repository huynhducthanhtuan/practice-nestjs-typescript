import { v4 as uuidv4 } from 'uuid';
import { HydratedDocument } from 'mongoose';
import { ProductDate } from 'src/types/models';
import { ProductStatus } from 'src/types/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductCommercialDocument = HydratedDocument<ProductCommercial>;

@Schema({ timestamps: true })
export class ProductCommercial {
  @Prop({ type: String, default: uuidv4 })
  productCommercialId: string;

  @Prop({ type: String })
  productId: string;

  @Prop({ type: String })
  productName: string;

  @Prop({ type: [String] })
  image: [string];

  @Prop({ type: [Object], default: [] })
  dates: ProductDate[];

  @Prop({ type: String })
  expireTime: string;

  @Prop({ type: String })
  price: string;

  @Prop({ type: String })
  unit: string;

  @Prop({ type: String, default: 'EXPORTED' })
  status: ProductStatus;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  certificateUrl: string;

  @Prop({ type: String })
  qrCode: string;
}

export const ProductCommercialSchema = SchemaFactory.createForClass(ProductCommercial);
