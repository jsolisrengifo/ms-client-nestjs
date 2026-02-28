import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface Cliente {
  nombre: string;
  apellidos: string;
  edad: number;
  profesion: string;
}

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getConfig() {
    return {
      appName : this.configService.get<string>('APP_NAME'),
      appEnv  : this.configService.get<string>('APP_ENV'),
      port    : this.configService.get<number>('PORT'),
    };
  }

  getClientes(): Cliente[] {
    return [
      { nombre: 'Carlos', apellidos: 'García López',    edad: 34, profesion: 'Ingeniero de Software' },
      { nombre: 'María',  apellidos: 'Martínez Ruiz',   edad: 28, profesion: 'Diseñadora UX' },
      { nombre: 'Andrés', apellidos: 'Rodríguez Pérez', edad: 45, profesion: 'Contador Público' },
      { nombre: 'Laura',  apellidos: 'Hernández Díaz',  edad: 31, profesion: 'Médico General' },
    ];
  }
}
