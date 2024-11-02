import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsHexColor,
} from 'class-validator';
import { BankAccountType } from '../Entities/BankAccount';

export class CreateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @IsNotEmpty()
  @IsEnum(BankAccountType)
  type: BankAccountType;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;
}
