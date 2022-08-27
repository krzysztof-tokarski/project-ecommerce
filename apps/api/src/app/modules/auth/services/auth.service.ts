import { Body, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SignInUserDto, User } from '@project-ecommerce/user-models';
import { JwtService } from '@nestjs/jwt';
import { BcryptService } from './bcrypt.service';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private bcryptService: BcryptService, private jwtService: JwtService) {}

  public async validateUser(username: string, password: string) {
    const foundUser = await this.usersService.findOne(username);

    if (!foundUser) {
      throw new NotFoundException('Did not find user with this email.');
    }
    const match = await this.bcryptService.comparePasswords(password, foundUser.hashedPassword);

    if (!match) {
      throw new UnauthorizedException('The provided password was incorrect.');
    }

    return foundUser;
  }

  async login(user) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
