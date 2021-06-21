import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteController } from './controllers/NoteController'
import { Todo ,TodoSchema } from './models/Note';
import { NoteService } from './services/NotesService'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/notes'),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])
  ],
  controllers: [NoteController],
  providers: [NoteService],
})
export class AppModule {}
