import { UserService } from '#services/user_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(private userService: UserService) {}

  login({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }
  async postLogin({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await this.userService.verify(email, password)
    await auth.use('web').login(user)
    return response.redirect().toRoute('admin.dashboard')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('home')
  }
}
