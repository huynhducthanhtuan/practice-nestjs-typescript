import { Model } from 'mongoose';
import { CreateProductDto } from './dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from 'src/schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productRepository: Model<ProductDocument>
  ) {}

  async getAllProducts() {
    return await this.productRepository.find({});
  }

  async getProductById(productId: string) {
    return await this.productRepository.findOne({ productId: productId });
  }

  async createProduct(product: CreateProductDto) {
    return await this.productRepository.create(product);
  }

  async updateProduct(productId: string, product: CreateProductDto) {
    return await this.productRepository.findOneAndUpdate({ productId: productId }, product, { new: true });
  }

  async deleteProduct(productId: string) {
    return await this.productRepository.findOneAndDelete({ productId: productId });
  }
}
