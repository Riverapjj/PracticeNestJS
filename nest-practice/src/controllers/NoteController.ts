import { Controller, Get, Put, Delete, Param, Req, Res, Post, Body } from '@nestjs/common';
import { NoteService } from '../services/NotesService';
import { Request } from 'express';
import { BaseNoteDto } from '../notes/dto/base.dto'
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
  
  // @Post('/')
  // async addNote(@Body() noteDTO:NoteDTO){
  //   const recipe = await this.service.addRecipe(noteDTO);
  //   return recipe;
  // }
  
  /**
   * 
   * @param params id
   * @param request all request object
   * @returns message id
   * Example path url : 'notes/1'
   */
  // @Get(':id')
  // findOne(@Param() params, @Req() request: Request) : string {
  //   return params.id;
  // }
  /**
   * 
   * @param id
   * @param request all request object
   * @returns message id
   * Example path url : 'notes/update/:id'
   */
  // @Put(':id')
  // update(@Param('id') id: string, @Req() request: Request) {
  //   return id;
  // }
  /**
   * 
   * @param id
   * @param request all request object
   * @returns message id
   * Example path url : 'notes/delete'
   */
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return id;
  // }

}
