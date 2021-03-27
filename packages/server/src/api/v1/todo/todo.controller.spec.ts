import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { getRepositoryToken } from '@nestjs/typeorm';

import { TodoService } from './todo.service';
import { Todo } from '@/entities';
import { MockRepository } from '@/utils/testing/mock-repository';

describe('Todo Controller', () => {
  let controller: TodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        TodoService,
        {
          provide: getRepositoryToken(Todo),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    controller = module.get<TodoController>(TodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
