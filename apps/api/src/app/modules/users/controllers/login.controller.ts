import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users.service';
import { CreateUserDto, SignInUserDto } from '@project-ecommerce/user-models';

@Controller('login')
export class LoginController {
  constructor(private usersService: UsersService) {}

  @Post()
  login(@Body() signInUserData: SignInUserDto) {
    this.usersService.findOne(signInUserData.email).then((v) => {
      console.log(v);
    });
  }
}
