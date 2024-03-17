import { User } from '../../enterprise/entities/user'

// type UserWithGoogleId = Omit<User, 'password'> & { googleId: string }

export abstract class UsersRepository {
  abstract findByEmail(email: string): Promise<User | null>
  abstract findByGoogleId(googleId: string | undefined): Promise<User | null>
  abstract create(user: User): Promise<void>
}
