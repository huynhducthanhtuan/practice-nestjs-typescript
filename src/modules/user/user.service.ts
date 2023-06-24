import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserForLogin } from 'src/types/models';
import { TokenService } from './token.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userRepository: Model<UserDocument>,
    private readonly tokenService: TokenService
  ) {}

  async login(user: UserForLogin) {
    const account = await this.userRepository.findOne({ phoneNumber: user.phoneNumber, password: user.password });

    if (!account) return null;

    const payload = {
      role: account.role,
      userId: account.userId,
      userName: account.userName,
      phoneNumber: account.phoneNumber
    };
    const token = await this.tokenService.generateAccessToken(payload);
    return token;
  }

  async getAllUsers() {
    return await this.userRepository.find({});
  }

  async getUserById(userId: string) {
    return await this.userRepository.findOne({ userId: userId });
  }

  async createUser(user: CreateUserDto) {
    return await this.userRepository.create(user);
  }

  async updateUser(userId: string, user: UpdateUserDto) {
    return await this.userRepository.findOneAndUpdate({ userId: userId }, user, { new: true });
  }

  async deleteUser(userId: string) {
    return await this.userRepository.findOneAndDelete({ userId: userId });
  }
}
