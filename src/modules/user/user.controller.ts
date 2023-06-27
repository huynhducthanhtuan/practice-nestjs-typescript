import { Request } from 'express';
import { UserRole } from 'src/utils';
import { UserService } from './user.service';
import { Auth, GetAuth } from 'src/decorators';
import { TokenPayload } from 'src/types/models';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { RefreshAuthGuard } from 'src/guards/refresh.guard';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto, LoginDto, UpdateUserDto } from './dto';
import {
  Req,
  Get,
  Body,
  Post,
  Patch,
  Delete,
  Param,
  UseGuards,
  Controller,
  HttpCode,
  NotFoundException,
  BadRequestException,
  UnauthorizedException
} from '@nestjs/common';

@ApiTags('Users')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Login' })
  @Post('/login')
  @HttpCode(200)
  @HttpCode(404)
  async login(@Body() user: LoginDto) {
    const loginInfo = await this.userService.login(user);
    if (!loginInfo) throw new NotFoundException({ message: 'User not found', data: null });
    return {
      message: 'Success',
      data: loginInfo
    };
  }

  @ApiOperation({ summary: 'Refresh Token' })
  @UseGuards(RefreshAuthGuard)
  @Post('/refresh-token')
  @HttpCode(200)
  @HttpCode(400)
  @HttpCode(500)
  async refreshToken(@Req() req: Request) {
    const tokenPayload = req.user as TokenPayload;
    const output = await this.userService.refreshToken(tokenPayload);

    if (output === null)
      throw new NotFoundException({
        message: 'User not found',
        data: null
      });

    return {
      message: 'Success',
      data: output
    };
  }

  @ApiOperation({ summary: 'Get All Users' })
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  @HttpCode(200)
  @HttpCode(400)
  @HttpCode(401)
  async getAllUsers(@GetAuth() auth: Auth) {
    if (auth.role !== UserRole.MANUFACTURER)
      throw new UnauthorizedException({ message: 'You do not have permission to perform this action', data: null });

    const products = await this.userService.getAllUsers();
    if (!products) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: products
    };
  }

  @ApiOperation({ summary: 'Get User By Id' })
  @UseGuards(JwtAuthGuard)
  @Get('/:userId')
  @HttpCode(200)
  @HttpCode(400)
  @HttpCode(401)
  async getUserById(@Param('userId') userId: string, @GetAuth() auth: Auth) {
    if (
      auth.role !== UserRole.SUPPLIER &&
      auth.role !== UserRole.MANUFACTURER &&
      auth.role !== UserRole.DISTRIBUTOR &&
      auth.role !== UserRole.RETAILER
    )
      throw new UnauthorizedException({ message: 'You do not have permission to perform this action', data: null });

    const product = await this.userService.getUserById(userId);
    if (!product) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: product
    };
  }

  @ApiOperation({ summary: 'Create User' })
  @Post('/')
  @HttpCode(200)
  @HttpCode(400)
  async createUser(@Body() product: CreateUserDto) {
    const createdUser = await this.userService.createUser(product);
    if (!createdUser) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: createdUser
    };
  }

  @ApiOperation({ summary: 'Update User' })
  @UseGuards(JwtAuthGuard)
  @Patch('/:userId')
  @HttpCode(200)
  @HttpCode(400)
  @HttpCode(401)
  async updateUser(@Param('userId') userId: string, @Body() product: UpdateUserDto, @GetAuth() auth: Auth) {
    if (
      auth.role !== UserRole.SUPPLIER &&
      auth.role !== UserRole.MANUFACTURER &&
      auth.role !== UserRole.DISTRIBUTOR &&
      auth.role !== UserRole.RETAILER
    )
      throw new UnauthorizedException({ message: 'You do not have permission to perform this action', data: null });

    const updatedUser = await this.userService.updateUser(userId, product);
    if (!updatedUser) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: updatedUser
    };
  }

  @ApiOperation({ summary: 'Delete User' })
  @UseGuards(JwtAuthGuard)
  @Delete('/:userId')
  @HttpCode(200)
  @HttpCode(400)
  @HttpCode(401)
  async deleteUser(@Param('userId') userId: string, @GetAuth() auth: Auth) {
    if (auth.role !== UserRole.MANUFACTURER)
      throw new UnauthorizedException({ message: 'You do not have permission to perform this action', data: null });

    const updatedUser = await this.userService.deleteUser(userId);
    if (!updatedUser) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: updatedUser
    };
  }
}
