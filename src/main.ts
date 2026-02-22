import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 1. Le decimos que use el puerto de OpenShift (8080)
  const port = process.env.PORT || 8080;
  
  // 2. Agregamos '0.0.0.0' para aceptar tráfico desde el Service de OpenShift.
  await app.listen(port, '0.0.0.0');
  
  console.log(`Aplicación corriendo en el puerto: ${port}`);
}
bootstrap();