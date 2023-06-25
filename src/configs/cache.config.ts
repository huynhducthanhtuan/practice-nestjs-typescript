import * as redisStore from 'cache-manager-ioredis';

export const cacheConfig = {
  store: redisStore,
  host: 'localhost', // Redis host
  port: 6379, // Redis port
  ttl: 300 // Cache time-to-live in seconds
};
