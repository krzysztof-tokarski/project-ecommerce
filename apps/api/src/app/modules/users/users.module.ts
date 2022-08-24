import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@project-ecommerce/user-models';
import { LoginController } from './controllers/login.controller';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController, LoginController],
  providers: [UsersService],
  exports: [MongooseModule],
})
export class UsersModule {}
