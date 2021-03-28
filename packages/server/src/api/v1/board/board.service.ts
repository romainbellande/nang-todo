import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Board } from '@/entities';

@Injectable()
export class BoardService extends TypeOrmCrudService<Board> {
  constructor(@InjectRepository(Board) repo: Repository<Board>) {
    super(repo);
  }
}
