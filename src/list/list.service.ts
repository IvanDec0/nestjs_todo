import { Inject, Injectable, Req } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { Model } from 'mongoose';
import { ListDocument } from './schema/list.schema';
import { LIST_MODEL } from 'src/constants/constants';
import { UserService } from 'src/user/user.service';


@Injectable()
export class ListService {

  constructor(
    @Inject(LIST_MODEL) private listModel: Model<ListDocument>,
    private userService: UserService
  ) {}

  async create(createListDto: CreateListDto, req: any) {
    createListDto.user = this.userService.getEmailFromToken(req)
    const item = await this.listModel.create(createListDto);
    return item;
  }

  async findAll(req: any) {
    const email = this.userService.getEmailFromToken(req)
    return await this.listModel.find({ user: email });
  }

  findOne(id: string) {
    return this.listModel.findById(id);
  }

  update(id: string, updateListDto: UpdateListDto) {
    const item = this.listModel.findByIdAndUpdate(id, updateListDto, { new: true });
    return item;
  }

  remove(id: string) {
    return this.listModel.findByIdAndDelete(id);
  }
}
