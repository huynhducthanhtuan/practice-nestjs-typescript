import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from './constants';
import { FavoriteModule } from './modules/favorite/favorite.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGO_URI),
    FavoriteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
