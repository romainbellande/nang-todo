---
to: packages/server/src/api/v1/<%= h.inflection.dasherize(name.toLowerCase()) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.controller.ts
---
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { <%= name %> } from '@/entities';
import { ApiTags } from '@nestjs/swagger';
import { <%= name %>Service } from './<%= h.inflection.dasherize(name.toLowerCase()) %>.service';

@Crud({
  model: { type: <%= name %> },
})
@ApiTags('<%= name %>')
@Controller('')
export class <%= name %>Controller implements CrudController<<%= name %>> {
  constructor(public service: <%= name %>Service) {}
}
