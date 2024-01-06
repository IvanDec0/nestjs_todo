import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ListProviders } from './providers/list.providers';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [ListController],
  providers: [ListService, ...ListProviders],
})
export class ListModule {}
