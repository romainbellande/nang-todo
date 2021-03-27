import { createCipheriv, scrypt, createDecipheriv } from 'crypto';
import { promisify } from 'util';
import { Config } from '@/config';

const iv = Buffer.from(Config.CRYPTO_IV_BASE64, 'base64');

const getKeyAsync = () =>
  promisify(scrypt)(Config.CRYPTO_KEY, 'salt', 32) as Promise<Buffer>;

// The key length is dependent on the algorithm.
// In this case for aes256, it is 32 bytes.

export const encrypt = async (textToEncrypt: string): Promise<string> => {
  const key = await getKeyAsync();
  const cipher = createCipheriv('aes-256-ctr', key, iv);

  const encryptedText = Buffer.concat([
    cipher.update(textToEncrypt),
    cipher.final(),
  ]);

  return encryptedText.toString('base64');
};

export const decrypt = async (encryptedText: string): Promise<string> => {
  const key = await getKeyAsync();

  const decipher = createDecipheriv('aes-256-ctr', key, iv);

  const decryptedText = Buffer.concat([
    decipher.update(Buffer.from(encryptedText, 'base64')),
    decipher.final(),
  ]).toString();

  return decryptedText;
};
