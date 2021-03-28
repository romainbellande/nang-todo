import { Test, TestingModule } from '@nestjs/testing';
import { ListController } from './list.controller';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ListService } from './list.service';
import { List } from '@/entities';
import { MockRepository } from '@/utils/testing/mock-repository';

describe('List Controller', () => {
  let controller: ListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListController],
      providers: [
        ListService,
        {
          provide: getRepositoryToken(List),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    controller = module.get<ListController>(
      ListController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
