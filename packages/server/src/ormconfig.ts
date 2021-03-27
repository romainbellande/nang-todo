import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Config } from './config';

import * as entities from './entities';

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: Config.DATABASE_URL,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  entities: Object.values(entities),
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsRun: true,
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default ormConfig;
