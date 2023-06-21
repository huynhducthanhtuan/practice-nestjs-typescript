import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from './constants';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(MONGO_URI), ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
