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
  UnauthorizedException,
  Logger
} from '@nestjs/common';

@ApiTags('Products')
@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Get All Products' })
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  async getAllProducts(@GetAuth() auth: Auth) {
    const logger = new Logger('Logger');
    logger.log(`auth`, auth);

    if (auth.role !== UserRole.MANUFACTURER)
      throw new UnauthorizedException({ message: 'You do not have permission to perform this action', data: null });

    const products = await this.productService.getAllProducts();
    if (!products) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: products
    };
  }

  @ApiOperation({ summary: 'Get Product By Id' })
  @Get('/:productId')
  async getProductById(@Param('productId') productId: string) {
    const product = await this.productService.getProductById(productId);
    if (!product) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: product
    };
  }

  @ApiOperation({ summary: 'Create Product' })
  @Post('/')
  async createProduct(@Body() product: CreateProductDto) {
    const createdProduct = await this.productService.createProduct(product);
    if (!createdProduct) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: createdProduct
    };
  }

  @ApiOperation({ summary: 'Update Product' })
  @Patch('/:productId')
  async updateProduct(@Param('productId') productId: string, @Body() product: CreateProductDto) {
    const updatedProduct = await this.productService.updateProduct(productId, product);
    if (!updatedProduct) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: updatedProduct
    };
  }

  @ApiOperation({ summary: 'Delete Product' })
  @Delete('/:productId')
  async deleteProduct(@Param('productId') productId: string) {
    const updatedProduct = await this.productService.deleteProduct(productId);
    if (!updatedProduct) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: updatedProduct
    };
  }
}
