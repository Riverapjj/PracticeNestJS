import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteController } from './controllers/NoteController'
import { NoteService } from './services/NotesService'

@Module({
  imports: [],
  //we implement each controller here
  controllers: [AppController, NoteController],
  //we implement each service here
  providers: [AppService, NoteService],
})
export class AppModule {}
