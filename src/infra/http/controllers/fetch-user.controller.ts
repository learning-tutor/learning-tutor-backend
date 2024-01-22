import { BadRequestException, Controller, Get, Req } from '@nestjs/common'
import { z } from 'zod'
import { FetchUserUseCase } from '@/domain/tasks/application/use-cases/fetch-user'
import { UserPresenter } from '@/infra/http/presenters/user-presenter'

const fetchUserReqSchema = z.object({
  user: z.object({
    email: z.string(),
  }),
})

type FetchUserReqSchema = z.infer<typeof fetchUserReqSchema>

@Controller('/user/me')
export class FetchUserController {
  constructor(private fetchUser: FetchUserUseCase) {}

  @Get()
  async handle(@Req() req: FetchUserReqSchema) {
    const sessionEmail = req.user.email

    if (!sessionEmail) {
      throw new BadRequestException()
    }

    const result = await this.fetchUser.execute({
      email: sessionEmail,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const user = result.value

    return UserPresenter.toHTTP(user)
  }
}
