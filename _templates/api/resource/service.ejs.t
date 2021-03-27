---
to: packages/server/src/api/v1/<%= h.inflection.dasherize(name.toLowerCase()) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.service.ts
---
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { <%= name %> } from '@/entities';

@Injectable()
export class <%= name %>Service extends TypeOrmCrudService<<%= name %>> {
  constructor(@InjectRepository(<%= name %>) repo: Repository<<%= name %>>) {
    super(repo);
  }
}
