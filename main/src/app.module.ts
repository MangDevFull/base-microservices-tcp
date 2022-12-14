import { Module, } from '@nestjs/common';

// import { GraphQLModule } from '@nestjs/graphql';
import { ModuleV1 } from './v1/index.module';
import { RouterModule } from '@nestjs/core'
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';


dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/main'),
    ModuleV1,
  ],
  providers: [],

})

export class AppModule { }
