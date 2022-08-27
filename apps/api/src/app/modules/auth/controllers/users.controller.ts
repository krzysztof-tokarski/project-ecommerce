import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '@project-ecommerce/user-models';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() newUserData: CreateUserDto) {
    this.usersService.create(newUserData);
  }
}
