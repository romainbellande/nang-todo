import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Board } from '@/entities';
import { ApiTags } from '@nestjs/swagger';
import { BoardService } from './board.service';

@Crud({
  model: { type: Board },
})
@ApiTags('Board')
@Controller('')
export class BoardController implements CrudController<Board> {
  constructor(public service: BoardService) {}
}
