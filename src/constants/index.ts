import { EnvConfig } from '../configs/env.config';

const config = new EnvConfig();

export const PORT = config.getNumber('PORT') || 5000;
export const HOST = config.get('HOST') || 'localhost';
export const MONGO_URI = config.get('MONGO_URI');
export const EXPIRES_IN = config.getNumber('EXPIRES_IN');
export const REFRESH_EXPIRES_IN = config.getNumber('REFRESH_EXPIRES_IN');
export const JWT_SECRET_KEY = config.get('JWT_SECRET_KEY');
export const JWT_REFRESH_SECRET_KEY = config.get('JWT_REFRESH_SECRET_KEY');
export const AWS_LAMBDA_ROLE = config.get('AWS_LAMBDA_ROLE');
export const SEARCH_HISTORY_API = config.get('SEARCH_HISTORY_API');
export const FIREBASE_STORAGE_BUCKET_LINK = config.get('FIREBASE_STORAGE_BUCKET_LINK');
export const STORAGE_FILE_EXPIRE_DAY = config.get('STORAGE_FILE_EXPIRE_DAY');
export const FIREBASE_PROJECT_ID = config.get('FIREBASE_PROJECT_ID');
export const FIREBASE_PRIVATE_KEY = config.get('FIREBASE_PRIVATE_KEY');
export const FIREBASE_CLIENT_EMAIL = config.get('FIREBASE_CLIENT_EMAIL');
export const ALL_USERS_CACHE_KEY = 'ALL_USERS';
