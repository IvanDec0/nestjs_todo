import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ListProviders } from './providers/list.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ListController],
  providers: [ListService, ...ListProviders],
})
export class ListModule {}
