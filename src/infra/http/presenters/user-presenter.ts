import { User } from '@/domain/tasks/enterprise/entities/user'
import { UserPreferences } from '@/domain/tasks/enterprise/entities/userPreferences'

type UserHTTP = {
  user: User
  userPreferences: UserPreferences | null
}

export class UserPresenter {
  static toHTTP({ user, userPreferences }: UserHTTP) {
    return {
      email: user.email,
      name: user.name,
      preferences: userPreferences
        ? {
            theme: userPreferences.theme,
            language: userPreferences.language,
            timezone: userPreferences.timezone,
          }
        : null,
    }
  }
}
