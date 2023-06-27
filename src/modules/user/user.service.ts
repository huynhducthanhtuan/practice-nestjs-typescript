import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TokenPayload, UserForLogin } from 'src/types/models';
import { ALL_USERS_CACHE_KEY } from 'src/constants';
import { CreateUserDto, RefreshTokenDto, UpdateUserDto } from './dto';
import { TokenService } from 'src/services/token.service';
import { CacheService } from 'src/services/cache.service';
import { User, UserDocument } from 'src/schemas/mongodb/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userRepository: Model<UserDocument>,
    private readonly tokenService: TokenService,
    private readonly cacheService: CacheService
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

  async refreshToken(tokenPayload: TokenPayload) {
    const user = await this.userRepository.findOne({ userId: tokenPayload.userId }).lean();

    if (user) {
      const payload = {
        userId: user.userId,
        userName: user.userName,
        role: user.role,
        phoneNumber: user.phoneNumber
      };

      const tokens = await this.tokenService.generateTokens(payload);
      return tokens;
    } else {
      return null;
    }
  }

  async getAllUsers() {
    let users = await this.cacheService.get(ALL_USERS_CACHE_KEY);

    if (!users) {
      // If users is not in the cache, retrieve it from normal way
      users = await this.userRepository.find({});

      // Store the users in the cache
      await this.cacheService.set(ALL_USERS_CACHE_KEY, users);
    }

    return users;
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
