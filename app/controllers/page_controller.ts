import type { HttpContext } from '@adonisjs/core/http'

export default class PageController {
  home({ inertia }: HttpContext) {
    return inertia.render('home')
  }
  privacyPolicy({ inertia }: HttpContext) {
    return inertia.render('privacy_policy')
  }
}
