import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';

import { routes } from './routes';
import ormConfig from './ormconfig';
import { TodoModule } from './api/v1/todo/todo.module';
import { UserModule } from './api/v1/user/user.module';
import { IsUnique } from './utils/validators/is-unique';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    RouterModule.forRoutes(routes),
    TodoModule,
    UserModule,
  ],
  controllers: [],
  providers: [IsUnique],
})
export class AppModule {}
