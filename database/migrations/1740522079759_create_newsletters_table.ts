import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'newsletters'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email').notNullable()
      table.boolean('active').defaultTo(false)
      table.string('validation_token').nullable()
      table.timestamp('validated_at').nullable()
      table.string('unsubscribe_token').nullable()
      table.timestamp('unsubscribe_at').nullable()
      table.boolean('unsubcribe').defaultTo(false)
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
