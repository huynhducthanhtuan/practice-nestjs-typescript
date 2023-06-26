import { MONGO_URI } from './constants';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, CacheModule } from '@nestjs/common';
import { Cron, ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { cacheConfig } from 'src/configs/cache.config';
import { ScheduleService } from 'src/services/schedule.service';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { FileStreamingModule } from './modules/filestreaming/filestreaming.module';
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
    FileStreamingModule
  ],
  controllers: [],
  providers: [ScheduleService]
})
export class AppModule {
  constructor(private readonly scheduleService: ScheduleService) {}

  // Run every minute
  @Cron('* * * * *')
  handleDataFetchingTask() {
    this.scheduleService.fetchDataAndUpdateDatabase();
  }
}
