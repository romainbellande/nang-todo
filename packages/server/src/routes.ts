import { Routes } from 'nest-router';
import { AuthModule } from './api/v1/auth/auth.module';
import { BoardModule } from './api/v1/board/board.module';
import { CardModule } from './api/v1/card/card.module';
import { ListModule } from './api/v1/list/list.module';
import { UserModule } from './api/v1/user/user.module';

export const routes: Routes = [
  {
    path: '/api',
    children: [
      {
        path: '/v1',
        children: [
          {
            path: '/auth',
            module: AuthModule,
          },
          {
            path: '/users',
            module: UserModule,
          },
          {
            path: '/boards',
            module: BoardModule,
            children: [
              {
                path: '/:boardId/lists',
                module: ListModule,
              },
              {
                path: '/:boardId/cards',
                module: CardModule,
              },
            ],
          },
        ],
      },
    ],
  },
];
