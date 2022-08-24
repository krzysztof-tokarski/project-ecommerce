import { Body, Controller, Get, Header, Headers, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '@project-ecommerce/user-models';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  create(@Body() newUserData: CreateUserDto) {
    this.usersService.create(newUserData);
  }
}
