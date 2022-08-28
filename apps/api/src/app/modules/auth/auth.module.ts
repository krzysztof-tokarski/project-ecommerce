import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from '@project-ecommerce/user-models';
import { environment } from 'apps/api/src/environments/environment';
import { UsersService } from '../users/users.service';
import { LoginController } from './controllers/login.controller';
import { AuthService } from './services/auth.service';
import { BcryptService } from './services/bcrypt.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: 'local' }),
    JwtModule.register({
      secret: environment.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [LoginController],
  providers: [BcryptService, AuthService, UsersService, LocalStrategy, JwtStrategy],
  exports: [MongooseModule],
})
export class AuthModule {}
