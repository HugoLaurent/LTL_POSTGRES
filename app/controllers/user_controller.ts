import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async loginUser({ request, response, auth }: HttpContext) {
    const { email } = request.only(['email', 'password'])

    const user = await User.query().where('email', email).first()

    await auth.use('web').login(user as any)

    return response.redirect('/')
  }
}
