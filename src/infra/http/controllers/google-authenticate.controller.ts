import { GoogleOAuthGuard } from '@/infra/auth/google-oauth.guard'
import { Controller, Get, Request, UseGuards } from '@nestjs/common'
import { AuthService } from '@/infra/auth/auth.service'
import { Public } from '@/infra/auth/public'

@Controller('google-auth')
@Public()
export class GoogleAuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req) {
    // return req.user
  }

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.authService.googleLogin(req)
  }
}
