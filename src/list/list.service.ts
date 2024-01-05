import { Inject, Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { Model } from 'mongoose';
import { List, ListDocument } from './schema/list.schema';
import { LIST_MODEL } from 'src/constants/constants';

@Injectable()
export class ListService {

  constructor(
    @Inject(LIST_MODEL) private listModel: Model<ListDocument>,
  ) {}

  async create(createListDto: CreateListDto) {
    createListDto.status = false;
    const item = await this.listModel.create(createListDto);
    return item;
  }

  findAll() {
    return this.listModel.find();
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
