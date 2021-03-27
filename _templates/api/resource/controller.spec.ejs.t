---
to: packages/server/src/api/v1/<%= h.inflection.dasherize(name.toLowerCase()) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.controller.spec.ts
---
import { Test, TestingModule } from '@nestjs/testing';
import { <%= name %>Controller } from './<%= h.inflection.dasherize(name.toLowerCase()) %>.controller';
import { getRepositoryToken } from '@nestjs/typeorm';

import { <%= name %>Service } from './<%= h.inflection.dasherize(name.toLowerCase()) %>.service';
import { <%= name %> } from '@/entities';
import { MockRepository } from '@/utils/testing/mock-repository';

describe('<%= name %> Controller', () => {
  let controller: <%= name %>Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [<%= name %>Controller],
      providers: [
        <%= name %>Service,
        {
          provide: getRepositoryToken(<%= name %>),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    controller = module.get<<%= name %>Controller>(
      <%= name %>Controller
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
