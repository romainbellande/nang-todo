import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { User } from '@/entities';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Crud({
  model: { type: User },
  query: {
    exclude: ['password'],
  },
  routes: {
    only: ['deleteOneBase', 'updateOneBase', 'getOneBase', 'getManyBase'],
  },
})
@ApiTags('User')
@ApiBearerAuth()
@Controller('')
@UseGuards(JwtAuthGuard)
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
