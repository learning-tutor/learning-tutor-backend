import { UserPreferences } from '@/domain/tasks/enterprise/entities/userPreferences'

export abstract class UserPreferencesRepository {
  abstract findUserPreferencesById(
    email: string,
  ): Promise<UserPreferences | null>
}
