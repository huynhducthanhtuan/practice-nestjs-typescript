import { Module } from '@nestjs/common';
import { MONGO_URI } from './constants';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(MONGO_URI), ProductModule, UserModule],
  controllers: [],
  providers: []
})
export class AppModule {}
