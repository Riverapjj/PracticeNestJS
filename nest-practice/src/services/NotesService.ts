import { Injectable, Req, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from '../models/Note';
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
  
}
