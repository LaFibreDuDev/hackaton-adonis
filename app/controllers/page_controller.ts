import type { HttpContext } from '@adonisjs/core/http'

export default class PageController {
  home({ inertia }: HttpContext) {
    return inertia.render('test/home')
  }
  privacyPolicy({ inertia }: HttpContext) {
    return inertia.render('test/privacy_policy')
  }

  alert({ inertia }: HttpContext) {
    return inertia.render('test/alert/unsubscribe')
  }
}
