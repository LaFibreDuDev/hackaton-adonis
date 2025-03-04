import { NewsletterService } from '#services/newsletter_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AdminController {
  constructor(private newsletterService: NewsletterService) {}

  async dashboard({ inertia }: HttpContext) {
    const newsletters = await this.newsletterService.findAll()
    return inertia.render('admin/dashboard', { newsletters })
  }
}
