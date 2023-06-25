import { MONGO_URI } from './constants';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, CacheModule } from '@nestjs/common';
// import { cacheConfig } from 'src/configs/cache.config';
// import { CacheService } from 'src/services/cache.service';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGO_URI),
    // CacheModule.register(cacheConfig),
    ProductModule,
    UserModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
