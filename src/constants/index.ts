import { EnvConfig } from '../configs/env.config';

const config = EnvConfig.getInstance();

export const PORT = config.getNumber('PORT') || 3000;
export const HOST = config.get('HOST') || 'localhost';
export const MONGO_URI = config.get('MONGO_URI');
export const EXPIRES_IN = config.getNumber('EXPIRES_IN');
export const REFRESH_EXPIRES_IN = config.getNumber('REFRESH_EXPIRES_IN');
export const JWT_SECRET_KEY = config.get('JWT_SECRET_KEY');
export const JWT_REFRESH_SECRET_KEY = config.get('JWT_REFRESH_SECRET_KEY');
