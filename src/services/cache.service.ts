import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async get(key: string): Promise<any> {
    return this.cacheManager.get(key);
  }

  async set(key: string, value: any): Promise<void> {
    await this.cacheManager.set(key, value);
  }

  async delete(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }
}
