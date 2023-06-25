import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from 'src/schemas/user.schema';
import { TokenService } from 'src/services/token.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStategy } from 'src/strategies/jwt.strategy';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), JwtModule],
  providers: [UserService, TokenService, JwtService, JwtStategy],
  controllers: [UserController]
})
export class UserModule {}
