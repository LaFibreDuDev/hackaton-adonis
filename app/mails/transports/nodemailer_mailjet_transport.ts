import nodemailer from 'nodemailer'
import mailjetTransport from 'nodemailer-mailjet-transport'
import { MailResponse } from '@adonisjs/mail'
import type { NodeMailerMessage, MailTransportContract } from '@adonisjs/mail/types'

export type MailjetConfig = {
  auth: {
    apiKey: string
    apiSecret: string
  }
}

export class MailjetTransport implements MailTransportContract {
  #config: MailjetConfig

  constructor(config: MailjetConfig) {
    this.#config = config
  }

  #createNodemailerTransport(config: MailjetConfig) {
    return nodemailer.createTransport(
      mailjetTransport({
        auth: {
          apiKey: config.auth.apiKey,
          apiSecret: config.auth.apiSecret,
        },
      } as unknown as nodemailer.TransportOptions)
    )
  }

  async send(message: NodeMailerMessage, config?: MailjetConfig): Promise<MailResponse> {
    const transporter = this.#createNodemailerTransport({
      ...this.#config,
      ...config,
    })

    const response = await transporter.sendMail(message)

    return new MailResponse<nodemailer.SentMessageInfo>(
      response.messageId,
      response.envelope,
      response
    )
  }
}
