import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  _id?: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
