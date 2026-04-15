import { CompanySector, CompanyStatus } from '@prisma/client';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEnum(CompanySector)
  sector!: CompanySector;

  @IsInt()
  @Min(0)
  employeeCount!: number;

  @IsDateString()
  nextAuditAt!: string;

  @IsEnum(CompanyStatus)
  status!: CompanyStatus;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
