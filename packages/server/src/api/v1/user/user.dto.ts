import { IsUnique } from '@/utils/validators/is-unique';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  Validate,
  Matches,
} from 'class-validator';
import { Column } from 'typeorm';

export class UserDto {
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
  @Validate(IsUnique, [{ encrypted: true, entity: 'User' }])
  email: string;

  @Column()
  @IsNotEmpty()
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
    message:
      'password must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character',
  })
  @ApiProperty()
  password: string;
}
