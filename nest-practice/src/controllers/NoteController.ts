import { Controller, Get, Put, Delete, Param, Req, Res, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { NoteService } from '../services/NotesService';
import { Request } from 'express';
import { BaseNoteDto } from '../notes/dto/base.dto'
import { CreateTodoDto } from 'src/notes/dto/create.dto';
import { UpdateTodoDto } from 'src/notes/dto/update.dto';
/**
 * Parent path of the controller
 * Example -> /notes
 */
@Controller('notes')
export class NoteController {

  /**
   * This is the NoteController file, here we are going to put the endpoints
   * for work with our service functions, for that our constructor will receive 
   * the Service class with an initial property (it's readonly because we are just
   * call the data) and then we can call all functions with that property
   */
  
  constructor(private service: NoteService) {}

  /**
   * path : '/notes'
   * @param request  all request object
   * @returns message
   */
  @Get()
  all(@Req() request: Request) {
    return this.service.findAll();
  }

  /**
   * path : '/notes'
   * @param request save note
   * @returns message
   */
  @Post()
  @UsePipes(new ValidationPipe())
  async addNote(@Body() noteDto: CreateTodoDto){
    return await this.service.createNote(noteDto);
  }
  
  /**
   * 
   * @param params id
   * @param request get single note
   * @returns message id
   * Example path url : 'notes/1'
   */
  @Get(':id')
  findOne(@Param() params, @Req() request: Request) : string {
    return params.id;
  }
  /**
   * 
   * @param id
   * @param request update note
   * @returns message id
   * Example path url : 'notes/update/:id'
   */
  @Put(':id')
  update(@Param() params, @Body() note: UpdateTodoDto) {
    return this.service.updateNote(params.id,note);
  }
  /**
   * 
   * @param id
   * @param request delete note
   * @returns message id
   * Example path url : 'notes/delete'
   */
  @Delete(':id')
  remove(@Param() params) {
    return this.service.delete(params.id);
  }

}
