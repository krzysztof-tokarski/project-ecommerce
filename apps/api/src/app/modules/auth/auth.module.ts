import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from '@project-ecommerce/user-models';
import { environment } from 'apps/api/src/environments/environment';
import { LoginController } from './controllers/login.controller';
import { UsersController } from './controllers/users.controller';
import { AuthService } from './services/auth.service';
import { BcryptService } from './services/bcrypt.service';
import { UsersService } from './services/users.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: 'local' }),
    JwtModule.register({
      secret: environment.JWT_SECRET,
      signOptions: { expiresIn: '1000s' },
    }),
  ],
  controllers: [UsersController, LoginController],
  providers: [UsersService, BcryptService, AuthService, LocalStrategy],
  exports: [MongooseModule],
})
export class AuthModule {}
