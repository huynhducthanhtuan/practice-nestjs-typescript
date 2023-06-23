import { ApiProperty } from '@nestjs/swagger';
import { UserRole, UserRoleArray } from 'src/types/types';
import { IsEmail, IsEnum, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsEmail()
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  password: string;

  @ApiProperty({ type: String })
  @IsString()
  fullName: string;

  @ApiProperty({ type: String })
  @IsString()
  avatar: string;

  @ApiProperty({ type: String })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ type: String })
  @IsString()
  address: string;

  @ApiProperty({ type: String, enum: UserRoleArray })
  @IsEnum(UserRoleArray)
  role: UserRole;

  @ApiProperty({ type: String })
  @IsString()
  signature: string;
}

export class UpdateUserDto {
  @ApiProperty({ type: String })
  @IsUUID()
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  password: string;

  @ApiProperty({ type: String })
  @IsString()
  fullName: string;

  @ApiProperty({ type: String })
  @IsString()
  avatar: string;

  @ApiProperty({ type: String })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ type: String })
  @IsString()
  address: string;

  @ApiProperty({ type: String })
  @IsString()
  signature: string;
}
