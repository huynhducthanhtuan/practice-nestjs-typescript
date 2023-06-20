import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DashboardQueryDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  startDate: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  endDate: string;

  @ApiProperty({ type: String })
  @IsString()
  name: string;
}
