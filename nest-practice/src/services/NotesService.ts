import { Injectable, Req, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from '../models/Note';
import { CreateTodoDto } from '../notes/dto/create.dto';
import { UpdateTodoDto } from 'src/notes/dto/update.dto';

@Injectable()
export class NoteService {
  constructor(@InjectModel(Todo.name) private model: Model<TodoDocument>) {}
  /**
   * This is the note service file, here we are going to
   * work with the querys and data from the Database, in resume here
   * we are going to put all functions to work with the Database
   */

  async findAll(){
    //return 'hey';
    return await this.model.find({}).exec();
  }

  async createNote(createTodoDto: CreateTodoDto): Promise<Todo>{
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save()
  }

  async updateNote(id: string,updateTodo: UpdateTodoDto){
    return await this.model.updateOne({_id: id},{$set:updateTodo});
  }
  async delete(id: string){
    return await this.model.deleteOne({_id: id});
  }
  
}
