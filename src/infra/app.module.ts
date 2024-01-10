import { Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'

import { AuthModule } from '@/infra/auth/auth.module'
import { HttpModule } from '@/infra/http/http.module'
import { EnvModule } from './env/env.module'
import { envSchema } from '@/infra/env'
//  This decorator is used to define a module. A module is a class annotated with a @Module() decorator. This decorator provides metadata that Nest makes use of to organize the application structure.
@Module({
  // The imports array tells Nest to import the ConfigModule class when the application starts.
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
    EnvModule,
  ], // The imports array tells Nest to import the ConfigModule class when the application starts.
  controllers: [], // The controllers array tells Nest to instantiate the CreateAccountController class when the application starts.
})
export class AppModule {}
