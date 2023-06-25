import { UserRole } from './types';

export type TokenPayload = {
  role: UserRole;
  userId: string;
  userName: string;
  phoneNumber: string;
};

