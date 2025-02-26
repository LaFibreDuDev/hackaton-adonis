import { NewsletterService } from '#services/newsletter_service'
import { createNewsletterValidator } from '#validators/newsletter'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class NewslettersController {
  constructor(private newsletterService: NewsletterService) {}

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createNewsletterValidator)
    await this.newsletterService.create(payload)
    return response.redirect('/newsletter/confirmation')
  }

  confirmation({ inertia }: HttpContext) {
    return inertia.render('confirmation')
  }
}
