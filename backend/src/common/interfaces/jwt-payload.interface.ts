import type { UserRoleType } from '../enums/user-role.enum';

export interface JwtPayload {
  sub: number;
  email: string;
  role: UserRoleType;
}

