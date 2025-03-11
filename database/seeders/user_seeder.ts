import User from '#models/user'
import env from '#start/env'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const user = new User()
    user.fullName = 'admin'
    user.email = env.get('ADMIN_EMAIL')
    user.password = env.get('ADMIN_PASSWORD')
    await user.save()
  }
}
