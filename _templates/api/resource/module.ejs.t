---
to: packages/server/src/api/v1/<%= h.inflection.dasherize(name.toLowerCase()) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.module.ts
---
import { <%= name %> } from '@/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { <%= name %>Controller } from './<%= h.inflection.dasherize(name.toLowerCase()) %>.controller';
import { <%= name %>Service } from './<%= h.inflection.dasherize(name.toLowerCase()) %>.service';

@Module({
  imports: [TypeOrmModule.forFeature([<%= name %>])],
  controllers: [<%= name %>Controller],
  providers: [<%= name %>Service],
})
export class <%= name %>Module {}
