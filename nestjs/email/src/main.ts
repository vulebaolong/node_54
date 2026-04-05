import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RABBIT_MQ_URL } from './common/constant/app.constant';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [RABBIT_MQ_URL!],
      queue: 'email_queue',
      queueOptions: {
        durable: false,
      },
      socketOptions: {
        connectionOptions: {
          clientProperties: {
            connection_name: 'email-on',
          },
        },
      },
    },
  });
  await app.listen();
}
bootstrap();
