import vine from '@vinejs/vine'
import { defineValidator } from './main.js'

const properties = {
  email: vine
    .string()
    .email()
    .trim()
    .minLength(4)
    .maxLength(256)
    .unique({
      table: 'newsletters',
      column: 'email',
    })
    .normalizeEmail({
      all_lowercase: true,
      gmail_remove_dots: true,
    }),
}

export const createNewsletterValidator = defineValidator(properties)
