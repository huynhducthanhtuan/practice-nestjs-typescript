import { Injectable } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { TransactionHistoryDto } from './dto';
import { TransactionHistory } from 'src/entities/transactionhistory.entity';

@Injectable()
export class TransactionHistoryService {
  private connection;
  private transactionHistoryRepository;
  private initialized = false;

  async initialize() {
    if (!this.initialized) {
      this.connection = await createConnection();
      this.transactionHistoryRepository = this.connection.getRepository(TransactionHistory);
      this.initialized = true;
    }
  }

  async getAllTransactionHistories() {
    await this.initialize();
    return await this.transactionHistoryRepository.find();
  }

  async getTransactionHistoryById(transactionId: string) {
    await this.initialize();
    return await this.transactionHistoryRepository.findOne({ where: { transactionId: transactionId } });
  }

  async createTransactionHistory(transaction: TransactionHistoryDto) {
    await this.initialize();
    await this.transactionHistoryRepository.save(transaction);
    return await this.transactionHistoryRepository.create(transaction);
  }

  async updateTransactionHistory(transaction: TransactionHistoryDto) {
    await this.initialize();
    return await this.transactionHistoryRepository.save(transaction);
  }

  async deleteTransactionHistory(transactionId: string) {
    await this.initialize();
    return await this.transactionHistoryRepository.delete(transactionId);
  }

  async closeConnection() {
    if (this.connection) {
      await this.connection.close();
      this.initialized = false;
    }
  }
}
