import { PassportStrategy } from '@nestjs/passport'
import { Strategy, VerifyCallback } from 'passport-google-oauth20'
import { Injectable } from '@nestjs/common'
import { GoogleAuthUseCase } from '@/domain/tasks/application/use-cases/google-auth'
import { User } from '@/domain/tasks/enterprise/entities/user'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly googleAuthUseCase: GoogleAuthUseCase) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3333/google-auth/google-redirect',
      scope: ['email', 'profile'],
    })
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
      refreshToken,
    }

    const normaLizedUser = User.create({
      name: `${name.givenName}${name.familyName ? ` ${name.familyName}` : ''}`,
      email: profile.emails[0].value,
      password: '',
      googleId: profile.id,
    })
    await this.googleAuthUseCase.execute(normaLizedUser)
    done(null, user)
  }
}
