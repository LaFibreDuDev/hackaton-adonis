import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  index({ inertia }: HttpContext) {
    return inertia.render('home')
  }
}
