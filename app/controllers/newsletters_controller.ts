import { NewsletterService } from '#services/newsletter_service'
import { createNewsletterValidator } from '#validators/newsletter'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { MailService } from '#services/mail_service'

@inject()
export default class NewslettersController {
  constructor(
    private newsletterService: NewsletterService,
    private mailService: MailService
  ) {}

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createNewsletterValidator)
    const newsletter = await this.newsletterService.create(payload)
    await this.mailService.confirmationEmail(newsletter)
    return response.redirect('/newsletter/confirmation')
  }

  async confirmation({ inertia }: HttpContext) {
    return inertia.render('test/alert/sent_confirmation_link')
  }

  async validate({ request, inertia }: HttpContext) {
    let validationToken = request.param('validationToken')
    validationToken = decodeURIComponent(validationToken)

    try {
      const newsletter = await this.newsletterService.findByValidationToken(validationToken)

      if (newsletter) {
        await this.newsletterService.validateNewsletter(newsletter)
        await this.mailService.validationEmail(newsletter)
        return inertia.render('test/alert/confirmation')
      }
    } catch (error) {
      return inertia.render('test/alert/error_link')
    }
  }

  async unsubscribe({ request, inertia }: HttpContext) {
    let unsubcribeToken = request.param('unsubscribeToken')
    unsubcribeToken = decodeURIComponent(unsubcribeToken)

    try {
      const newsletter = await this.newsletterService.findByUnsubscribeToken(unsubcribeToken)
      if (newsletter) {
        await this.newsletterService.unsubscribeNewsletter(newsletter)
        await this.mailService.unsubscribeEmail(newsletter)
        return inertia.render('test/alert/unsubscribe')
      }
    } catch (error) {
      return inertia.render('test/alert/error_link')
    }
  }
}
