import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from 'src/schemas/product';
import { CreateProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productRepo: Model<ProductDocument>,
  ) {}

  async getAllProducts() {
    return await this.productRepo.find({});
  }

  async getProductById(productId: string) {
    return await this.productRepo.findOne({ productId: productId });
  }

  async createProduct(product: CreateProductDto) {
    return await this.productRepo.create(product);
  }

  async updateProduct(productId: string, product: CreateProductDto) {
    return await this.productRepo.findOneAndUpdate({ productId: productId }, product, { new: true });
  }

  async deleteProduct(productId: string) {
    return await this.productRepo.findOneAndDelete({ productId: productId });
  }
}
