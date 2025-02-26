import vine from '@vinejs/vine'
import { defineValidator } from './main.js'

const properties = {
  email: vine
    .string()
    .email()
    .trim()
    .minLength(4)
    .maxLength(256)
    .unique(async (db, value, field) => {
      const emailExists = await db.from('newsletters').where('email', value).first()
      if (emailExists) {
        field.report('', 'unique', field)
      }
      return !emailExists
    })
    .normalizeEmail({
      all_lowercase: true,
      gmail_remove_dots: true,
    }),
}

export const createNewsletterValidator = defineValidator(properties)
