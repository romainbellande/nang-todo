import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from './board.controller';
import { getRepositoryToken } from '@nestjs/typeorm';

import { BoardService } from './board.service';
import { Board } from '@/entities';
import { MockRepository } from '@/utils/testing/mock-repository';

describe('Board Controller', () => {
  let controller: BoardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardController],
      providers: [
        BoardService,
        {
          provide: getRepositoryToken(Board),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    controller = module.get<BoardController>(
      BoardController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
