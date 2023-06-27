import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TokenService } from 'src/services/token.service';
import { CacheService } from 'src/services/cache.service';
import { User, UserSchema } from 'src/schemas/mongodb/user.schema';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStategy } from 'src/strategies/jwt.strategy';
import { RefreshTokenStrategy } from 'src/strategies/refreshToken.strategy';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), JwtModule, CacheModule.register()],
  providers: [UserService, CacheService, TokenService, JwtService, JwtStategy, RefreshTokenStrategy],
  controllers: [UserController]
})
export class UserModule {}
