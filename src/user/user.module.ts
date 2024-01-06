import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserProviders } from './providers/user.providers';
import { JwtModule } from '@nestjs/jwt';
import { EXPIRATION, SECRET } from 'src/constants/constants';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [DatabaseModule, 
    JwtModule.register({
      secret: SECRET,
      signOptions: { expiresIn: EXPIRATION },
    }),],
  controllers: [UserController],
  providers: [UserService, ...UserProviders, JwtStrategy],
  exports: [UserService],
})
export class UserModule {}
