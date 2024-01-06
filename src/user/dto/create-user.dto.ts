import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(8, 32)
    password: string;
}
