import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { hash, compare } from 'bcrypt';
import { SALT_ROUNDS, SECRET, USER_MODEL } from 'src/constants/constants';
import { UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class UserService {

  constructor(
    @Inject(USER_MODEL) private userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {}
  
  async register(createUserDto: CreateUserDto) {

    const { password } = createUserDto;
    const plainToHash = await hash(password, SALT_ROUNDS)
    createUserDto = { ...createUserDto, password: plainToHash }
    return this.userModel.create(createUserDto);
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const findUser = await this.userModel.findOne({ email });
    if (!findUser) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    
    const checkPassword = await compare(password, findUser.password);
    if (!checkPassword) throw new HttpException('Wrong password', HttpStatus.BAD_REQUEST);
    
    const payload = { id: findUser._id, email: findUser.email };
    const token = this.jwtService.sign(payload);
    return { token };
  }

  getEmailFromToken(req: any){
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, SECRET);
    return decoded['email'];
  }
}
