import { TransactionHistoryDto } from './dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TransactionHistoryService } from './transactionhistory.service';
import { Controller, Get, BadRequestException, Param, Body, Post, Patch, Delete, HttpCode } from '@nestjs/common';

@ApiTags('Transaction Histories')
@Controller('/transaction-history')
export class TransactionHistoryController {
  constructor(private readonly transactionHistoryService: TransactionHistoryService) {}

  @ApiOperation({ summary: 'Get All Transaction Histories' })
  @Get('/all')
  @HttpCode(200)
  @HttpCode(400)
  async getAllTransactionHistories() {
    const transactions = await this.transactionHistoryService.getAllTransactionHistories();
    if (!transactions) throw new BadRequestException({ message: 'Bad Request', data: null });

    return {
      message: 'Success',
      data: transactions
    };
  }

  @ApiOperation({ summary: 'Get Transaction History By Id' })
  @Get('/:transactionId')
  @HttpCode(200)
  @HttpCode(400)
  async getTransactionHistoryById(@Param('transactionId') transactionId: string) {
    const transaction = await this.transactionHistoryService.getTransactionHistoryById(transactionId);
    if (!transaction) throw new BadRequestException({ message: 'Bad Request', data: null });

    return {
      message: 'Success',
      data: transaction
    };
  }

  @ApiOperation({ summary: 'Create Transaction History' })
  @Post('/')
  @HttpCode(200)
  @HttpCode(400)
  async createTransactionHistory(@Body() transaction: TransactionHistoryDto) {
    const createdTransaction = await this.transactionHistoryService.createTransactionHistory(transaction);
    if (!createdTransaction) throw new BadRequestException({ message: 'Bad Request', data: null });

    return {
      message: 'Success',
      data: createdTransaction
    };
  }

  @ApiOperation({ summary: 'Update Transaction History' })
  @Patch('/')
  @HttpCode(200)
  @HttpCode(400)
  async updateTransactionHistory(@Body() transaction: TransactionHistoryDto) {
    const updatedTransaction = await this.transactionHistoryService.updateTransactionHistory(transaction);
    if (!updatedTransaction) throw new BadRequestException({ message: 'Bad Request', data: null });

    return {
      message: 'Success',
      data: updatedTransaction
    };
  }

  @ApiOperation({ summary: 'Delete Transaction History' })
  @Delete('/:transactionId')
  @HttpCode(200)
  @HttpCode(400)
  async deleteTransactionHistory(@Param('transactionId') transactionId: string) {
    const deletedTransaction = await this.transactionHistoryService.deleteTransactionHistory(transactionId);
    if (!deletedTransaction) throw new BadRequestException({ message: 'Bad Request', data: null });

    return {
      message: 'Success',
      data: deletedTransaction
    };
  }
}
