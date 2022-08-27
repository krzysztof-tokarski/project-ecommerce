import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Body, Injectable, Req } from '@nestjs/common';
import { SignInUserDto } from '@project-ecommerce/user-models';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string) {
    const user = await this.authService.validateUser(email, password);
    if (!user) return;

    return user;
  }
}
