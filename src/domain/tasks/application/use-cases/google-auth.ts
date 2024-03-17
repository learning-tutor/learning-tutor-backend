import { Injectable } from '@nestjs/common'
import { UsersRepository } from '@/domain/tasks/application/repositories/users-repository'
import { User } from '@/domain/tasks/enterprise/entities/user'

@Injectable()
export class GoogleAuthUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(user: User): Promise<any> {
    // Lógica para validar e criar/atualizar usuários no banco de dados
    const usr = await this.usersRepository.findByGoogleId(user?.googleId)

    if (!usr) {
      // Se o usuário não existir, crie-o no banco de dados
      const normaLizedUser = User.create({
        name: user.name,
        email: user.email,
        password: user.password,
        googleId: user.googleId,
      })

      const newUser = await this.usersRepository.create(normaLizedUser)
      return newUser
    }

    return user
  }
}
