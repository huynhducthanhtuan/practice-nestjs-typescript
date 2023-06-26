import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class TransactionHistoryDto {
  @ApiProperty({ type: String })
  @IsString()
  transactionId: string;

  @ApiProperty({ type: String })
  @IsString()
  productId: string;

  @ApiProperty({ type: String })
  @IsString()
  timeStamp: string;

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  isDelete: boolean;
}
