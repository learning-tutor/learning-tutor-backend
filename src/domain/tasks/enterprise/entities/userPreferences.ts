import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface UserPreferencesProps {
  language: 'EN' | 'PT_BR'
  theme: 'LIGHT' | 'DARK'
  timezone: string
  userId: string
  id: string
}

export class UserPreferences extends Entity<UserPreferencesProps> {
  get language() {
    return this.props.language
  }

  get theme() {
    return this.props.theme
  }

  get timezone() {
    return this.props.timezone
  }

  get userId() {
    return this.props.userId
  }

  static create(props: UserPreferencesProps, id?: UniqueEntityID) {
    const userPreferences = new UserPreferences(props, id)

    return userPreferences
  }
}
