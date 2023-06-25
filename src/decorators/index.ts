import { UserRole } from 'src/types/types';
import { ExecutionContext, SetMetadata, createParamDecorator } from '@nestjs/common';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);

export type Auth = { userId: string; role: UserRole; userName: string; phoneNumber: string };

export const GetAuth = createParamDecorator((_: unknown, context: ExecutionContext) => {
  const ctx = context.switchToHttp().getRequest();
  return ctx.user as Auth;
});
