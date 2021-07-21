import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsEmpty, Length, ValidateIf } from 'class-validator';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;
@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description?: string;

  @Prop()
  completedAt?: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}


export const TodoSchema = SchemaFactory.createForClass(Todo);