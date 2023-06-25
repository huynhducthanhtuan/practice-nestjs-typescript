import { UserService } from './user.service';
import { Auth, GetAuth } from 'src/decorators';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto, LoginDto, UpdateUserDto } from './dto';
import {
  Controller,
  Get,
  BadRequestException,
  Param,
  Body,
  Post,
  Patch,
  Delete,
  UseGuards,
  UnauthorizedException
} from '@nestjs/common';
import { UserRole } from 'src/utils';

@ApiTags('Users')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Login' })
  @Post('/login')
  async login(@Body() user: LoginDto) {
    const loginInfo = await this.userService.login(user);
    if (!loginInfo) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: loginInfo
    };
  }

  @ApiOperation({ summary: 'Get All Users' })
  @UseGuards(JwtAuthGuard)
  @Get('/all')
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
