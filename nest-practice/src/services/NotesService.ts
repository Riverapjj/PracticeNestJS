import { Injectable, Req, Res } from '@nestjs/common';

@Injectable()
export class NoteService {

  /**
   * This is the note service file, here we are going to
   * work with the querys and data from the Database, in resume here
   * we are going to put all functions to work with the Database
   */

  /**
   * 
   * @returns 
   */
  all(): string {
    return 'All notes!';
  }
}
