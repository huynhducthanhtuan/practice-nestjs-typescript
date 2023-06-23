import { UserRole } from './types';

export type TokenPayload = {
  role: UserRole;
  userId: string;
  userName: string;
  phoneNumber: string;
};

export type DecodeUser = {
  userId: string;
  role: string;
  userName: string;
  phoneNumber: string;
  iat: number;
  exp: number;
};
