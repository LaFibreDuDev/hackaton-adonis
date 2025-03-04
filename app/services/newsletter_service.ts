import Newsletter from '#models/newsletter'
import { inject } from '@adonisjs/core'
import { Hash } from '@adonisjs/core/hash'
import { DateTime } from 'luxon'

interface NewsletterPayload {
  email: string
}

@inject()
export class NewsletterService {
  constructor(private hash: Hash) {}

  async create(payload: NewsletterPayload) {
    const newsletter = new Newsletter()

    newsletter.email = payload.email

    newsletter.active = false
    newsletter.validationToken = await this.hash.make(payload.email + Date.now().toString())

    newsletter.unsubcribe = false
    newsletter.unsubscribeToken = await this.hash.make(payload.email + Date.now().toString())

    await newsletter.save()
    return newsletter
  }

  async findByValidationToken(validationToken: string) {
    return Newsletter.query().where('validationToken', validationToken).firstOrFail()
  }

  async validateNewsletter(newsletter: Newsletter) {
    newsletter.active = true
    newsletter.validatedAt = DateTime.now()
    newsletter.validationToken = ''
    await newsletter.save()
  }

  async findByUnsubscribeToken(unsubscribeToken: string) {
    return Newsletter.query().where('unsubscribeToken', unsubscribeToken).firstOrFail()
  }

  async unsubscribeNewsletter(newsletter: Newsletter) {
    newsletter.active = false
    newsletter.unsubcribe = true
    newsletter.unsubscribeAt = DateTime.now()
    newsletter.unsubscribeToken = ''
    newsletter.validationToken = ''
    await newsletter.save()
  }
}
