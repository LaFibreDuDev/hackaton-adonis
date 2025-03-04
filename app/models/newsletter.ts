import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Newsletter extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column()
  declare active: boolean

  @column()
  declare validationToken: string

  @column()
  declare unsubcribe: boolean

  @column()
  declare unsubscribeToken: string

  @column.dateTime()
  declare validatedAt: DateTime

  @column.dateTime()
  declare unsubscribeAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
