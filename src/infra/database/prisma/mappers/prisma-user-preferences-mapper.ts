import {
  UserPreferences as PrismaUserPreferences,
  Prisma,
} from '@prisma/client'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { UserPreferences } from '@/domain/tasks/enterprise/entities/userPreferences'

export class PrismaUserPreferenceMapper {
  static toDomain(raw: PrismaUserPreferences): UserPreferences {
    return UserPreferences.create(
      {
        language: raw.language,
        theme: raw.theme,
        timezone: raw.timezone,
        userId: raw.userId,
        id: raw.id,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(
    userPreferences: UserPreferences,
  ): Prisma.UserPreferencesUncheckedCreateInput {
    return {
      id: userPreferences.id.toString(),
      timezone: userPreferences.timezone,
      userId: userPreferences.userId,
      language: userPreferences.language,
      theme: userPreferences.theme,
    }
  }
}
