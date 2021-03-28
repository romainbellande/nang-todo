import { Card } from '@/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CardController } from './card.controller';
import { CardService } from './card.service';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
