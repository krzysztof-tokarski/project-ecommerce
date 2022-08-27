import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class BcryptService {
  public async comparePasswords(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
