import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStategy } from 'src/strategies/jwt.strategy';
import { TokenService } from 'src/services/token.service';
import { TransactionHistoryService } from './transactionhistory.service';
import { TransactionHistoryController } from './transactionhistory.controller';

@Module({
  imports: [JwtModule],
  providers: [TransactionHistoryService, TokenService, JwtService, JwtStategy],
  controllers: [TransactionHistoryController]
})
export class TransactionHistoryModule {}
