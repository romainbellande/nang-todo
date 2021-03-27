import { Routes } from 'nest-router';
import { TodoModule } from './api/v1/todo/todo.module';
import { UserModule } from './api/v1/user/user.module';

export const routes: Routes = [
  {
    path: '/api',
    children: [
      {
        path: '/v1',
        children: [
          {
            path: '/todos',
            module: TodoModule,
          },
          {
            path: '/users',
            module: UserModule,
          },
        ],
      },
    ],
  },
];
