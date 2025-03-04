import User from '#models/user'

export class UserService {
  async verify(email: string, password: string) {
    return User.verifyCredentials(email, password)
  }
}
