import { Module } from '@nestjs/common';
import { ClientProxyFactory ,Transport } from "@nestjs/microservices"
import { SubscribeController } from './subcribe.controller';
import {ConfigService,ConfigModule} from "@nestjs/config"


@Module({
    providers: [
        {
          provide: 'SUBSCRIBE_SERVICE',
          useFactory: (configService: ConfigService) => 
            ClientProxyFactory.create({
                transport: Transport.TCP,
                options:{
                    host: configService.get('SUBSCRIBE_HOST'),
                    port: configService.get('SUBSCRIBE_PORT')
                }
              }),
          inject: [ConfigService],
        }
      ],
  controllers: [SubscribeController],
  imports: [ConfigModule],
})
export class SubscribeModule {}