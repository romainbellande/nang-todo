import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Card } from '@/entities';
import { ApiTags } from '@nestjs/swagger';
import { CardService } from './card.service';

@Crud({
  model: { type: Card },
})
@ApiTags('Card')
@Controller('')
export class CardController implements CrudController<Card> {
  constructor(public service: CardService) {}
}
