import { Either, right, left } from '@/core/either'
import { Injectable } from '@nestjs/common'
import { User } from '@/domain/tasks/enterprise/entities/user'
import { UserPreferences } from '@/domain/tasks/enterprise/entities/userPreferences'
import { UsersRepository } from '@/domain/tasks/application/repositories/users-repository'
import { UserPreferencesRepository } from '@/domain/tasks/application/repositories/user-preference-repository'

interface FetchUserUseCaseRequest {
  email: string
}

type FetchUserUseCaseResponse = Either<
  null,
  {
    user: User
    userPreferences: UserPreferences | null
  }
>

@Injectable()
export class FetchUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private userPreferencesRepository: UserPreferencesRepository,
  ) {}

  async execute({
    email,
  }: FetchUserUseCaseRequest): Promise<FetchUserUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      return left(null)
    }
    if (user.email !== email) {
      return left(null)
    }

    const userPreferences =
      await this.userPreferencesRepository.findUserPreferencesById(
        user.id.toString(),
      )

    return right({
      user,
      userPreferences,
    })
  }
}
