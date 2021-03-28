import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { List } from '@/entities';

@Injectable()
export class ListService extends TypeOrmCrudService<List> {
  constructor(@InjectRepository(List) repo: Repository<List>) {
    super(repo);
  }
}
