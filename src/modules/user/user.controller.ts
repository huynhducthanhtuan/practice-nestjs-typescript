import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Controller, Get, BadRequestException, Param, Body, Post, Patch, Delete } from '@nestjs/common';

@ApiTags('Users')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get All Users' })
  @Get('/all')
  async getAllUsers() {
    const products = await this.userService.getAllUsers();
    if (!products) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: products
    };
  }

  @ApiOperation({ summary: 'Get User By Id' })
  @Get('/:userId')
  async getUserById(@Param('userId') userId: string) {
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
  @Patch('/:userId')
  async updateUser(@Param('userId') userId: string, @Body() product: UpdateUserDto) {
    const updatedUser = await this.userService.updateUser(userId, product);
    if (!updatedUser) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: updatedUser
    };
  }

  @ApiOperation({ summary: 'Delete User' })
  @Delete('/:userId')
  async deleteUser(@Param('userId') userId: string) {
    const updatedUser = await this.userService.deleteUser(userId);
    if (!updatedUser) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: updatedUser
    };
  }
}
