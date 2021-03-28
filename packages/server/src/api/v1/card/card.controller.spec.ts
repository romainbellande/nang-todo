import { Test, TestingModule } from '@nestjs/testing';
import { CardController } from './card.controller';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CardService } from './card.service';
import { Card } from '@/entities';
import { MockRepository } from '@/utils/testing/mock-repository';

describe('Card Controller', () => {
  let controller: CardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardController],
      providers: [
        CardService,
        {
          provide: getRepositoryToken(Card),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    controller = module.get<CardController>(
      CardController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
