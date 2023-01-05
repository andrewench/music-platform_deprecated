import argon2 from 'argon2';

interface IVerifyPassword {
  hash: string;
  password: string;
}

export class CryptoService {
  public static async encryptPassword(
    password: string
  ): Promise<string | { error: Error } | undefined> {
    try {
      const hash = await argon2.hash(password);

      return hash;
    } catch (err) {
      if (err instanceof Error) {
        return {
          error: { ...err },
        };
      }
    }
  }

  public static async verifyPassword({
    hash,
    password,
  }: IVerifyPassword): Promise<boolean | { error: Error } | undefined> {
    try {
      const isVerified = await argon2.verify(hash, password);

      return isVerified;
    } catch (err) {
      if (err instanceof Error) {
        return {
          error: { ...err },
        };
      }
    }
  }
}
