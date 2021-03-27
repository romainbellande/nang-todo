import { ValidatorConstraint } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { UniqueValidator } from './unique.validator';
import { InjectConnection } from '@nestjs/typeorm';

@ValidatorConstraint({ name: 'unique', async: true })
@Injectable()
export class IsUnique extends UniqueValidator {
  constructor(@InjectConnection() connection: Connection) {
    super(connection);
  }
}
