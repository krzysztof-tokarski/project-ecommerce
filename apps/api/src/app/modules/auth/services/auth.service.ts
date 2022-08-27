import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserSnippetDto } from '@project-ecommerce/user-models';
import { BcryptService } from './bcrypt.service';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private bcryptService: BcryptService, private jwtService: JwtService) {}

  public async validateUser(email: string, password: string) {
    const foundUser = await this.usersService.findOne(email);

    if (!foundUser) {
      throw new NotFoundException('Did not find user with this email.');
    }
    const match = await this.bcryptService.comparePasswords(password, foundUser.hashedPassword);

    if (!match) {
      throw new UnauthorizedException('The provided password was incorrect.');
    }

    return foundUser;
  }

  async login(user: User) {
    const { firstName, lastName, _id, email } = user;
    const userSnippet: UserSnippetDto = {
      email,
      firstName,
      lastName,
      id: _id.toString(),
    };
    return {
      // TODO better token security?
      // TODO research re sign method
      user: userSnippet,
      accessToken: this.jwtService.sign({}),
    };
  }
}
