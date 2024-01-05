
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ListDocument = List & Document;

@Schema()
export class List {

  @Prop({ required: true})
  name: string;

  @Prop({ required: true})
  description: string;

  @Prop({ required: true})
  status: Boolean;
}

export const ListSchema = SchemaFactory.createForClass(List);