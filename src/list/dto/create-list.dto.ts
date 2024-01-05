import { IsNotEmpty } from "class-validator";

export class CreateListDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    status: boolean;
}
