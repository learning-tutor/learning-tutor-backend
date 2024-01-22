import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { UserPreferences } from '@/domain/tasks/enterprise/entities/userPreferences'
import { PrismaUserPreferenceMapper } from '../mappers/prisma-user-preferences-mapper'
import { UserPreferencesRepository } from '@/domain/tasks/application/repositories/user-preference-repository'

@Injectable()
export class PrismaUserPreferencesRepository
  implements UserPreferencesRepository
{
  constructor(private prisma: PrismaService) {}

  async findUserPreferencesById(
    userId: string,
  ): Promise<UserPreferences | null> {
    const userPreferences = await this.prisma.userPreferences.findUnique({
      where: {
        userId,
      },
    })

    if (!userPreferences) {
      return null
    }

    return PrismaUserPreferenceMapper.toDomain(userPreferences)
  }
}
