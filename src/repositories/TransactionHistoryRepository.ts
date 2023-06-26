import { EntityRepository, Repository } from 'typeorm';
import { TransactionHistory } from 'src/entities/transactionhistory.entity';

@EntityRepository(TransactionHistory)
export class TransactionHistoryRepository extends Repository<TransactionHistory> {}
