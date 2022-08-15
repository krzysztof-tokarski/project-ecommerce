import { Injectable } from '@nestjs/common';
import { Message } from '@fullstack-node-portfolio-app/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
