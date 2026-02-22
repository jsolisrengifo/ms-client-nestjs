import { Controller, Get } from '@nestjs/common';
import { AppService, Cliente } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('clientes')
  getClientes(): Cliente[] {
    return this.appService.getClientes();
  }
}
