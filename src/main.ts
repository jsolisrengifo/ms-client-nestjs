import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port     = process.env.PORT     || 3000;
  const appName  = process.env.APP_NAME || 'ms-client-default';
  const appEnv   = process.env.APP_ENV  || 'local-default';

  // '0.0.0.0' necesario para aceptar tráfico desde el Service de OpenShift
  await app.listen(port, '0.0.0.0');

  console.log(`[${appName}] Ambiente: ${appEnv} | Puerto: ${port}`);
}
bootstrap();