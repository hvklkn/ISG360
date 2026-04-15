import type { UserRoleType } from '../enums/user-role.enum';

export interface AuthenticatedUser {
  userId: number;
  email: string;
  role: UserRoleType;
}

