import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TransactionHistory {
  @PrimaryGeneratedColumn('uuid')
  transactionId: string;

  @Column()
  productId: string;

  @Column()
  timeStamp: string;

  @Column()
  isDelete: boolean;
}
