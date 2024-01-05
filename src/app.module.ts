import { Module } from '@nestjs/common';
import { ListModule } from './list/list.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ListModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
