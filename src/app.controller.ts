import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/v1')
  getEan(@Param('ean') ean: string): Promise<string> {
    // check if it is a valide ean 13 or 12
    // seek google
    return this.appService.searchEngine(Number(ean));
    // check if the page is valide
    // seek the first valide website
    // get all the info
  }
}
