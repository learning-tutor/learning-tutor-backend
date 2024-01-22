import { Module } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { UsersRepository } from '@/domain/tasks/application/repositories/users-repository'
import { PrismaUsersRepository } from '@/infra/database/prisma/repositories/prisma-user-repository'
import { PrismaUserPreferencesRepository } from '@/infra/database/prisma/repositories/prisma-user-preferences-repository'
import { UserPreferencesRepository } from '@/domain/tasks/application/repositories/user-preference-repository'

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    {
      // UseCase -> Repository
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: UserPreferencesRepository,
      useClass: PrismaUserPreferencesRepository,
    },
  ],
  exports: [PrismaService, UsersRepository, UserPreferencesRepository],
})
export class DatabaseModule {}
