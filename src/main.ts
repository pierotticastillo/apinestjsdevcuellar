import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // Creación del módulo NestJS y la inicialización del mismo
  const app = await NestFactory.create(AppModule);
  // Configuración de prefijos de rutas para el API
  app.setGlobalPrefix('api');
  // Configuración de las variables de entorno  
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  // Inicialización del servidor en el puerto configurado
  await app.listen(port);
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
}
bootstrap();
