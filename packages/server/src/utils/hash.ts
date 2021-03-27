import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export const hash = (value: string): Promise<string> =>
  bcrypt.hash(value, saltOrRounds);

export const isMatch = (value: string, hash: string) =>
  bcrypt.compare(value, hash);
