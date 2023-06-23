import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userRepository: Model<UserDocument>
  ) {}

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
