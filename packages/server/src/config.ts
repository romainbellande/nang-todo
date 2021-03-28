import { CrudGlobalConfig } from '@nestjsx/crud';

export class Config {
  static readonly DATABASE_URL: string = process.env.DATABASE_URL;

  static readonly PORT: number = parseInt(process.env.PORT);

  static readonly CRYPTO_KEY: string = process.env.CRYPTO_KEY;

  static readonly CRYPTO_IV_BASE64: string = process.env.CRYPTO_IV_BASE64;

  static readonly JWT_SECRET: string = process.env.JWT_SECRET;

  static readonly CRUD_GLOBAL_CONFIG: CrudGlobalConfig = {
    params: {
      id: {
        field: 'id',
        type: 'uuid',
        primary: true,
      },
    },
    query: {
      limit: 30,
      maxLimit: 30,
      alwaysPaginate: true,
    },
  };
}
