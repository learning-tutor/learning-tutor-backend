import { DatabaseModule } from '@/infra/database/database.module'
import { AuthenticateControler } from '@/infra/http/controllers/authenticate.controller'
import { CreateAccountControler } from '@/infra/http/controllers/create-account.controller'

import { Module } from '@nestjs/common'

import { RegisterUserUseCase } from '@/domain/tasks/application/use-cases/register-user'
import { AuthenticateUserUseCase } from '@/domain/tasks/application/use-cases/authenticate-user'
import { CryptographyModule } from '../cryptography/cryptography.module'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [CreateAccountControler, AuthenticateControler],
  providers: [RegisterUserUseCase, AuthenticateUserUseCase],
})
export class HttpModule {}
