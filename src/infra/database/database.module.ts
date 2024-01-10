import { Module } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { UsersRepository } from '@/domain/tasks/application/repositories/users-repository'
import { PrismaUsersRepository } from '@/infra/database/prisma/repositories/prisma-user-repository'

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
  ],
  exports: [PrismaService, UsersRepository],
})
export class DatabaseModule {}
