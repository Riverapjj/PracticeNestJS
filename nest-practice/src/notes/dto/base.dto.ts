import { IsDate, IsDateString, IsEmail, IsEmpty, IsNotEmpty, IsString } from "class-validator"

export class BaseNoteDto {
    id:string

    @IsNotEmpty({message: "El campo no puede quedar vacio"})
    @IsString({message:"El campo es una cadena de texto"})
    @IsEmail()
    //@IsDateString() //yyyy-mm-dd
    title: string
    
    @IsNotEmpty()
    description?: string
 }