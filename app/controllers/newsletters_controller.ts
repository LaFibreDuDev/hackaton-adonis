import { NewsletterService } from '#services/newsletter_service'
import { createNewsletterValidator } from '#validators/newsletter'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

@inject()
export default class NewslettersController {
  constructor(private newsletterService: NewsletterService) {}

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createNewsletterValidator)
    await this.newsletterService.create(payload)

    const from = 'info@hackatruite.org'
    const emailTo = payload.email
    const baseUrl = 'http://localhost:3333'

    await mail.send((message) => {
      message
        .to(emailTo)
        .from(from)
        .subject('Confirmation de votre inscription - Plateforme Hackatruite')
        .htmlView('emails/verify_email', {
          privacy_policy_link: `${baseUrl}/privacy_policy`,
          confirmation_url: `${baseUrl}/confirmation`,
          unsubscribe_link: `${baseUrl}/unsubscribe`,
          author_names: "LaFibreDuDev et l'école Oclock",
          email_to: emailTo,
        })
    })

    return response.redirect('/newsletter/confirmation')
  }

  async confirmation({ inertia }: HttpContext) {
    return inertia.render('confirmation')
  }
}
