import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserSnippetDto } from '@project-ecommerce/user-models';
import { ObjectId } from 'mongoose';
import { UsersService } from '../../users/users.service';
import { JwtSignPayload } from '../models/jwt-sign-payload.model';
import { BcryptService } from './bcrypt.service';

type UserWithoutAuthData = {
  email: string;
  firstName: string;
  lastName: string;
  _id: ObjectId;
};

type LoginResponse = {
  user: UserSnippetDto;
  accessToken: string;
};

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private bcryptService: BcryptService, private jwtService: JwtService) {}

  public async validateUser(email: string, password: string) {
    const foundUser = await this.usersService.findOne(email, ['_id', 'email', 'firstName', 'lastName', 'hashedPassword']);

    if (!foundUser) {
      throw new NotFoundException('Did not find user with this email.');
    }
    const match = await this.bcryptService.comparePasswords(password, foundUser.hashedPassword);

    if (!match) {
      throw new UnauthorizedException('The provided password was incorrect.');
    }

    const { hashedPassword, salt, ...strippedUser } = foundUser;

    return strippedUser;
  }

  async login(user: UserWithoutAuthData): Promise<LoginResponse> {
    const { firstName, lastName, _id, email } = user;
    const userSnippet: UserSnippetDto = {
      email,
      firstName,
      lastName,
      id: _id.toString(),
    };

    const jwtSignPayload: JwtSignPayload = {
      sub: userSnippet.id,
      user: userSnippet,
    };

    return {
      user: userSnippet,
      accessToken: this.jwtService.sign(jwtSignPayload),
    };
  }
}
