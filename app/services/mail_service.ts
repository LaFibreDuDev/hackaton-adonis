import Newsletter from '#models/newsletter'
import env from '#start/env'
import { inject } from '@adonisjs/core'
import router from '@adonisjs/core/services/router'
import { Message } from '@adonisjs/mail'
import mail from '@adonisjs/mail/services/main'

@inject()
export class MailService {
  private baseUrl = env.get('APP_URL')
  private from = {
    address: 'contact@lafibredudev.com',
    name: 'Contact Hackatruite',
  }
  private mailTransport: 'smtp' | 'resend' = 'resend'

  constructor() {}

  private addFrom(message: Message) {
    if (this.mailTransport === 'smtp' || this.mailTransport === 'resend') {
      message.from(this.from.address, this.from.name)
    }
  }
  private generateConfirmationUrl(validationToken: string) {
    // TODO générer un token avec une date (compléter makeSigned)
    return router
      .builder()
      .prefixUrl(this.baseUrl)
      .params({
        validationToken: encodeURIComponent(validationToken),
      })
      .makeSigned('newsletter.validate')
  }
  private generateUnsubscribeUrl(unsubscribeToken: string) {
    // TODO générer un token avec une date (compléter makeSigned)
    return router
      .builder()
      .prefixUrl(this.baseUrl)
      .params({
        unsubscribeToken: encodeURIComponent(unsubscribeToken),
      })
      .makeSigned('newsletter.unsubscribe')
  }

  async confirmationEmail(newsletter: Newsletter) {
    await mail.use(this.mailTransport).send((message) => {
      this.addFrom(message)
      message
        .to(newsletter.email)
        .subject('Confirmation de votre inscription - Plateforme Hackatruite')
        .htmlView('emails/verify_email', {
          privacy_policy_link: `${this.baseUrl}/privacy_policy`,
          confirmation_url: this.generateConfirmationUrl(newsletter.validationToken),
          unsubscribe_link: this.generateUnsubscribeUrl(newsletter.unsubscribeToken),
          author_names: "LaFibreDuDev et l'école Oclock",
          email_to: newsletter.email,
        })
    })
  }
  async validationEmail(newsletter: Newsletter) {
    await mail.use(this.mailTransport).send((message) => {
      this.addFrom(message)
      message
        .to(newsletter.email)
        .subject('Inscription confirmée - Plateforme Hackatruite')
        .htmlView('emails/validate_email', {
          privacy_policy_link: `${this.baseUrl}/privacy_policy`,
          unsubscribe_link: this.generateUnsubscribeUrl(newsletter.unsubscribeToken),
          author_names: "LaFibreDuDev et l'école Oclock",
          email_to: newsletter.email,
        })
    })
  }
  async unsubscribeEmail(newsletter: Newsletter) {
    await mail.use(this.mailTransport).send((message) => {
      this.addFrom(message)
      message
        .to(newsletter.email)
        .subject('Désinscription confirmée - Plateforme Hackatruite')
        .htmlView('emails/unsubscribe_email', {
          privacy_policy_link: `${this.baseUrl}/privacy_policy`,
          author_names: "LaFibreDuDev et l'école Oclock",
          email_to: newsletter.email,
        })
    })
  }
}
