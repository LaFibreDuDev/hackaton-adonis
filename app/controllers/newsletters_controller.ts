import { NewsletterService } from '#services/newsletter_service'
import { createNewsletterValidator } from '#validators/newsletter'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'
import router from '@adonisjs/core/services/router'
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
    return inertia.render('alert', {
      title: "Confirmation d'inscription",
      message:
        "Votre inscription à l'évènement a bien été prise en compte ! Vous devriez recevoir un mail de confirmation à cet effet !",
      alertType: 'success',
    })
  }

  async validate({ request, inertia }: HttpContext) {
    let validationToken = request.param('validationToken')
    validationToken = decodeURIComponent(validationToken)

    try {
      const newsletter = await this.newsletterService.findByValidationToken(validationToken)

      if (newsletter) {
        await this.newsletterService.validateNewsletter(newsletter)
        await this.mailService.validationEmail(newsletter)
        return inertia.render('alert', {
          title: "Validation d'inscription",
          message: `Votre inscription à la newsletter est validée avec l'email suivant : ${newsletter.email}`,
          alertType: 'success',
        })
      }
    } catch (error) {
      return inertia.render('alert', {
        title: 'Erreur lors de la validation',
        message: `Ce lien de validation à la newsletter n'est pas valide ! Veuillez contacter un administrateur !`,
        alertType: 'error',
      })
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
        return inertia.render('alert', {
          title: 'Confirmation de désinscription',
          message: `Votre demande de désinscription à la newsletter a bien été prise en compte avec l'email suivant : ${newsletter.email}`,
          alertType: 'success',
        })
      }
    } catch (error) {
      return inertia.render('alert', {
        title: 'Erreur lors de la déinscription',
        message: `Ce lien de désinscription à la newsletter n'est pas valide ! Veuillez contacter un administrateur !`,
        alertType: 'error',
      })
    }
  }
}
