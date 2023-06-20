import {
  IsArray,
  IsEmail,
  IsEnum,
  IsMongoId,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Pagination, Role } from 'src/utils';
import { AVATAR_DEFAULT } from '../../../constants';
import { ObjectId } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class AccountCreateDto {
  @ApiProperty({ type: String })
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/, {
    message: 'Password must include at least 1 number and 1 character',
  })
  password: string;

  @ApiProperty({ type: String })
  @IsString()
  @MaxLength(200)
  @Matches(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/, {
    message: 'Name contains only alphabets',
  })
  name: string;

  @ApiProperty({ type: Number })
  @IsEnum(Role)
  role: Role = Role.TRAVELER;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  avatar: string = AVATAR_DEFAULT;
}
export class AccountUpdateDto {
  @ApiProperty({ type: String })
  @IsMongoId()
  @IsOptional()
  accountId: ObjectId;

  @ApiProperty({ type: String })
  @IsEmail()
  @IsOptional()
  @MaxLength(100)
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  @MaxLength(200)
  @Matches(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/, {
    message: 'Name contains only alphabets',
  })
  name: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  avatar: string = AVATAR_DEFAULT;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsEnum(Role)
  role: Role;

  @ApiProperty({ type: Boolean })
  @IsOptional()
  isActive: boolean;

  @ApiProperty({ type: Boolean })
  @IsOptional()
  isConfirmed: boolean;
}

export class PasswordDto {
  @ApiProperty({ type: String })
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/, {
    message: 'Password must include at least 1 number and 1 character',
  })
  currentPassword: string;

  @ApiProperty({ type: String })
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/, {
    message: 'Password must include at least 1 number and 1 character',
  })
  newPassword: string;

  @ApiProperty({ type: String })
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/, {
    message: 'Password must include at least 1 number and 1 character',
  })
  confirmPassword: string;
}

export class SignInDto {
  @ApiProperty({ type: String })
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/, {
    message: 'Password must include at least 1 number and 1 character',
  })
  password: string;
}

export class GoogleAccountDto {
  @ApiProperty({ type: String })
  @IsEmail()
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  @MaxLength(200)
  name: string;

  @ApiProperty({ type: Number })
  @IsEnum(Role)
  role: Role = Role.TRAVELER;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  avatar: string = AVATAR_DEFAULT;
}

export class EmailConfirmationDto {
  @ApiProperty({ type: String })
  @IsString()
  context: string;

  @ApiProperty({ type: String })
  @IsString()
  email: string;
}

export class FacebookAccountDto {
  @ApiProperty({ type: String })
  @IsEmail()
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  @MaxLength(200)
  name: string;

  @ApiProperty({ type: Number })
  @IsEnum(Role)
  role: Role = Role.TRAVELER;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  avatar: string = AVATAR_DEFAULT;
}

export class BlockedAccountBodyDto {
  @ApiProperty({ type: String })
  @IsMongoId()
  blockedId: ObjectId;
}

export class DeletedAccountBodyDto {
  @ApiProperty({ type: Array })
  @IsArray()
  deletedIds: ObjectId[];
}

export class AccountQueryDto extends Pagination {
  @ApiProperty({ type: String })
  @IsOptional()
  keyword: string;
}
