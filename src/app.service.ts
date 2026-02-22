import { Injectable } from '@nestjs/common';

export interface Cliente {
  nombre: string;
  apellidos: string;
  edad: number;
  profesion: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getClientes(): Cliente[] {
    return [
      { nombre: 'Carlos', apellidos: 'García López', edad: 34, profesion: 'Ingeniero de Software' },
      { nombre: 'María', apellidos: 'Martínez Ruiz', edad: 28, profesion: 'Diseñadora UX' },
      { nombre: 'Andrés', apellidos: 'Rodríguez Pérez', edad: 45, profesion: 'Contador Público' },
      { nombre: 'Laura', apellidos: 'Hernández Díaz', edad: 31, profesion: 'Médico General' },
    ];
  }
}
