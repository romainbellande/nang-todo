import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  AfterLoad,
} from 'typeorm';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsArray,
  Matches,
  IsOptional,
  Validate,
} from 'class-validator';
import { decrypt, encrypt } from '@/utils/crypto';
import { hash } from '@/utils/hash';
import { ApiProperty } from '@nestjs/swagger';
import { IsUnique } from '@/utils/validators/is-unique';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'John' })
  firstName: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'jdoe@example.com' })
  @Validate(IsUnique, [{ encrypted: true }])
  email: string;

  @Column('varchar', { array: true })
  @IsArray()
  @IsOptional()
  @ApiProperty()
  roles: string[] = [];

  @Column()
  @IsNotEmpty()
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
    message:
      'password must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character',
  })
  @ApiProperty()
  password: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt?: string;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt?: string;

  @BeforeInsert()
  async beforeInsert() {
    this.password = await hash(this.password);
    this.firstName = await encrypt(this.firstName);
    this.lastName = await encrypt(this.lastName);
    this.email = await encrypt(this.email);
  }

  @AfterLoad()
  async loadEntity() {
    this.firstName = await decrypt(this.firstName);
    this.lastName = await decrypt(this.lastName);
    this.email = await decrypt(this.email);
  }
}
