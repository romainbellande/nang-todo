import { Controller } from '@nestjs/common';
import { Crud, CrudController, CrudAuth } from '@nestjsx/crud';

import { Todo } from '@/entities';
import { ApiTags } from '@nestjs/swagger';
import { TodoService } from './todo.service';

@Crud({
  model: { type: Todo },
})
@ApiTags('Todo')
@Controller('')
export class TodoController implements CrudController<Todo> {
  constructor(public service: TodoService) {}
}
