import { MailjetConfig, MailjetTransport } from '#mails/transports/nodemailer_mailjet_transport'
import type { MailManagerTransportFactory } from '@adonisjs/mail/types'

export function mailjetTransport(config: MailjetConfig): MailManagerTransportFactory {
  return () => {
    return new MailjetTransport(config)
  }
}
