import { Module } from '@nestjs/common';
import { ListModule } from './list/list.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ListModule, DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
