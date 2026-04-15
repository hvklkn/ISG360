export const USER_ROLES = ['ADMIN', 'EXPERT', 'COMPANY_USER'] as const;
export type UserRoleType = (typeof USER_ROLES)[number];
