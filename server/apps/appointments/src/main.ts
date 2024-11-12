import { NestFactory } from '@nestjs/core';
import { AppointmentsModule } from './appointments.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const appContext =
    await NestFactory.createApplicationContext(AppointmentsModule);
  const configService = appContext.get(ConfigService);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppointmentsModule,
    {
      transport: Transport.TCP,
      options: {
        host: configService.get<string>('APPOINTMENTS_HOST'),
        port: configService.get<number>('APPOINTMENTS_PORT', 3004), // Default to 3004 if not specified
      },
    },
  );
  await app.listen();
}
bootstrap();
