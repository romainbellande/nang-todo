---
to: packages/server/src/api/v1/<%= h.inflection.dasherize(name.toLowerCase()) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.service.spec.ts
---
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { <%= name %> } from '@/entities';
import { MockRepository } from '@/utils/testing/mock-repository';
import { <%= name %>Service } from './<%= h.inflection.dasherize(name.toLowerCase()) %>.service';

describe('<%= name %>Service', () => {
  let service: <%= name %>Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        <%= name %>Service,
        {
          provide: getRepositoryToken(<%= name %>),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    service = module.get<<%= name %>Service>(<%= name %>Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
