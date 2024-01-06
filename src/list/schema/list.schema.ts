
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ListDocument = List & Document;

@Schema()
export class List {

  @Prop({ required: true})
  name: string;

  @Prop({ required: true})
  description: string;

  @Prop({ required: true, default: false})
  status: Boolean;

  @Prop({ required: true})
  user: string;

  @Prop({ required: true, default: Date.now()})
  created_at: Date;
}

export const ListSchema = SchemaFactory.createForClass(List);