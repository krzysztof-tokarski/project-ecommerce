import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { environment } from '../environments/environment';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot(environment.DB_CONNECTION_STRING), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
