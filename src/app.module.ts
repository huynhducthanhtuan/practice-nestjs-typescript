import { MONGO_URI } from './constants';
import { ConfigModule } from '@nestjs/config';
import { cacheConfig } from 'src/configs/cache.config';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, CacheModule } from '@nestjs/common';
import { Cron, ScheduleModule } from '@nestjs/schedule';
import { ScheduleService } from 'src/services/schedule.service';
import { UserModule } from './modules/user/user.module';
import { FileModule } from './modules/file/file.module';
import { ProductModule } from './modules/product/product.module';
import { TransactionHistoryModule } from './modules/transactionhistory/transactionhistory.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGO_URI),
    CacheModule.register(cacheConfig),
    ScheduleModule.forRoot(),
    ProductModule,
    UserModule,
    TransactionHistoryModule,
    FileModule
  ],
  controllers: [],
  providers: [ScheduleService]
})
export class AppModule {
  constructor(private readonly scheduleService: ScheduleService) {}

  // Run every hour at the beginning of the hour
  @Cron('0 * * * *')
  handleDataFetchingTask() {
    this.scheduleService.fetchData();
  }
}
