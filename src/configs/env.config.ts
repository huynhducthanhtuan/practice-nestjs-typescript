import { config } from 'dotenv';

export class EnvConfig {
  private static _instance: EnvConfig;

  constructor() {
    config({ path: '.env' });
  }

  public get(key: string): string {
    return process.env[key];
  }

  public getNumber(key: string): number {
    return Number(this.get(key));
  }
}
