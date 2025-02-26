import Newsletter from '#models/newsletter'

interface NewsletterPayload {
  email: string
}

export class NewsletterService {
  async create(payload: NewsletterPayload) {
    const newsletter = new Newsletter()
    newsletter.email = payload.email
    await newsletter.save()
  }
}
