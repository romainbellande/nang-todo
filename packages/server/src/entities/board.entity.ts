import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Card } from './card.entity';
import { List } from './list.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @OneToMany(() => List, (list) => list.board)
  lists: List[];

  @OneToMany(() => Card, (card) => card.board)
  cards: Card[];

  @ApiProperty()
  @CreateDateColumn()
  createdAt?: string;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt?: string;
}
