import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CacheService {
  private readonly logger = new Logger(CacheService.name);

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

  async viewCacheData() {
    const cacheStore = this.cacheManager.store;
    const keys = await cacheStore.keys();

    for (const key of keys) {
      const value = await cacheStore.get(key);
      this.logger.log(`Key: ${key}, Value: ${value}`);
    }
  }
}
