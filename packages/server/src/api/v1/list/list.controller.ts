import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { List } from '@/entities';
import { ApiTags } from '@nestjs/swagger';
import { ListService } from './list.service';

@Crud({
  model: { type: List },
})
@ApiTags('List')
@Controller('')
export class ListController implements CrudController<List> {
  constructor(public service: ListService) {}
}
