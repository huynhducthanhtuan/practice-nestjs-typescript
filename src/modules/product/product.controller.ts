import { UserRole } from 'src/utils';
import { CreateProductDto } from './dto';
import { Auth, GetAuth } from 'src/decorators';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { ProductService } from './product.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
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

@ApiTags('Products')
@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Get All Products' })
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  async getAllProducts(@GetAuth() auth: Auth) {
    if (auth.role !== UserRole.SUPPLIER && auth.role !== UserRole.MANUFACTURER && auth.role !== UserRole.RETAILER)
      throw new UnauthorizedException({ message: 'You do not have permission to perform this action', data: null });

    const products = await this.productService.getAllProducts();
    if (!products) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: products
    };
  }

  @ApiOperation({ summary: 'Get Product By Id' })
  @UseGuards(JwtAuthGuard)
  @Get('/:productId')
  async getProductById(@Param('productId') productId: string, @GetAuth() auth: Auth) {
    if (auth.role !== UserRole.SUPPLIER && auth.role !== UserRole.MANUFACTURER && auth.role !== UserRole.RETAILER)
      throw new UnauthorizedException({ message: 'You do not have permission to perform this action', data: null });

    const product = await this.productService.getProductById(productId);
    if (!product) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: product
    };
  }

  @ApiOperation({ summary: 'Create Product' })
  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createProduct(@Body() product: CreateProductDto, @GetAuth() auth: Auth) {
    if (auth.role !== UserRole.SUPPLIER)
      throw new UnauthorizedException({ message: 'You do not have permission to perform this action', data: null });

    const createdProduct = await this.productService.createProduct(product);
    if (!createdProduct) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: createdProduct
    };
  }

  @ApiOperation({ summary: 'Update Product' })
  @UseGuards(JwtAuthGuard)
  @Patch('/:productId')
  async updateProduct(@Param('productId') productId: string, @Body() product: CreateProductDto, @GetAuth() auth: Auth) {
    if (auth.role !== UserRole.SUPPLIER && auth.role !== UserRole.MANUFACTURER)
      throw new UnauthorizedException({ message: 'You do not have permission to perform this action', data: null });

    const updatedProduct = await this.productService.updateProduct(productId, product);
    if (!updatedProduct) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: updatedProduct
    };
  }

  @ApiOperation({ summary: 'Delete Product' })
  @UseGuards(JwtAuthGuard)
  @Delete('/:productId')
  async deleteProduct(@Param('productId') productId: string, @GetAuth() auth: Auth) {
    if (auth.role !== UserRole.SUPPLIER && auth.role !== UserRole.MANUFACTURER)
      throw new UnauthorizedException({ message: 'You do not have permission to perform this action', data: null });

    const updatedProduct = await this.productService.deleteProduct(productId);
    if (!updatedProduct) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: updatedProduct
    };
  }
}
