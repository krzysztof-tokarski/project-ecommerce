import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class BcryptService {
  public hashPassword(password: string) {
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    return { salt, hashedPassword };
  }
}
