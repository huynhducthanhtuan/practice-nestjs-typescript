import { v4 as uuidv4 } from 'uuid';
import { HydratedDocument } from 'mongoose';
import { OrderStatus } from './../types/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Actor, DeliveryStatus, ProductCommercialItem } from 'src/types/models';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: String, default: uuidv4 })
  orderId: string;

  @Prop({ type: [Object], default: [] })
  productItemList: ProductCommercialItem[];

  @Prop({ type: [String], default: [] })
  signatures: [string];

  @Prop({ type: [Object], default: [] })
  deliveryStatuses: DeliveryStatus[];

  @Prop({ type: String, default: 'PENDING' })
  status: OrderStatus;

  @Prop({ type: Object })
  manufacturer: Actor;

  @Prop({ type: Object })
  distributor: Actor;

  @Prop({ type: Object })
  retailer: Actor;

  @Prop({ type: String })
  qrCode: string;

  @Prop({ type: String, default: '' })
  createDate: string;

  @Prop({ type: String, default: '' })
  updateDate: string;

  @Prop({ type: String, default: '' })
  finishDate: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
