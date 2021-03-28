import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';

import { routes } from './routes';
import ormConfig from './ormconfig';
import { CardModule } from './api/v1/card/card.module';
import { UserModule } from './api/v1/user/user.module';
import { IsUnique } from './utils/validators/is-unique';
import { ListModule } from './api/v1/list/list.module';
import { BoardModule } from './api/v1/board/board.module';
import { AuthModule } from './api/v1/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    RouterModule.forRoutes(routes),
    CardModule,
    ListModule,
    BoardModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [IsUnique],
})
export class AppModule {}
