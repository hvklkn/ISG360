import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

import { USER_ROLES, type UserRoleType } from '../../common/enums/user-role.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  passwordHash!: string;

  @IsOptional()
  @IsIn(USER_ROLES)
  role?: UserRoleType;
}

