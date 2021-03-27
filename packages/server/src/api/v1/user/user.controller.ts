import { Controller } from '@nestjs/common';
import { Crud, CrudController, CrudAuth } from '@nestjsx/crud';

import { User } from '@/entities';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@Crud({
  model: { type: User },
  query: {
    exclude: ['password'],
  },
})
@ApiTags('User')
@Controller('')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
