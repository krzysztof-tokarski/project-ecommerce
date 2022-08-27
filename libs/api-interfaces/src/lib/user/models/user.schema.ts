import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class User {
  _id?: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  salt: string;

  @Prop()
  hashedPassword: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
