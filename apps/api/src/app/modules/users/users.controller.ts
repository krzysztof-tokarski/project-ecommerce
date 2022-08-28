import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '@project-ecommerce/user-models';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  private getProfile(@Req() req) {
    return req.user;
  }

  // @UseGuards(JwtAuthGuard)
  // @Get(':id')
  // private getUser(@Param() params) {
  //   console.log(params.id);
  // }

  @Post()
  private createUser(@Body() newUserData: CreateUserDto) {
    this.usersService.create(newUserData);
  }
}
