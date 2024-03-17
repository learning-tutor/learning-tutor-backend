import { DatabaseModule } from '@/infra/database/database.module'
import { AuthenticateControler } from '@/infra/http/controllers/authenticate.controller'
import { CreateAccountControler } from '@/infra/http/controllers/create-account.controller'

import { Module } from '@nestjs/common'

import { RegisterUserUseCase } from '@/domain/tasks/application/use-cases/register-user'
import { AuthenticateUserUseCase } from '@/domain/tasks/application/use-cases/authenticate-user'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { FetchUserController } from '@/infra/http/controllers/fetch-user.controller'
import { FetchUserUseCase } from '@/domain/tasks/application/use-cases/fetch-user'
import { GoogleAuthController } from '@/infra/http/controllers/google-authenticate.controller'
import { AuthService } from '@/infra/auth/auth.service'
import { GoogleAuthUseCase } from '@/domain/tasks/application/use-cases/google-auth'
import { GoogleStrategy } from '@/infra/auth/google.strategy'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountControler,
    GoogleAuthController,
    AuthenticateControler,
    FetchUserController,
  ],
  providers: [
    RegisterUserUseCase,
    AuthenticateUserUseCase,
    FetchUserUseCase,
    AuthService,
    GoogleAuthUseCase,
    GoogleStrategy,
  ],
})
export class HttpModule {}
