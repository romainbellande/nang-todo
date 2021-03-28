import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class List {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @ManyToOne(() => Board, (board) => board.lists)
  board: Board;

  @ApiProperty()
  @CreateDateColumn()
  createdAt?: string;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt?: string;
}
