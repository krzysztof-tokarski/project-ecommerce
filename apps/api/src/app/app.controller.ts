import { Controller, Get } from '@nestjs/common';

// import { Message } from '@fullstack-node-portfolio-app/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getData() {
    return console.log('app-controller')
  }
}
