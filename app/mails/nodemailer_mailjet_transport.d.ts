declare module 'nodemailer-mailjet-transport' {
  import { TransportOptions } from 'nodemailer'

  export default function mailjetTransport(options: TransportOptions): TransportOptions
}
