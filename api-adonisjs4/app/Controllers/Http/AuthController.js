'use strict'

const USER = use('App/Models/User')
class AuthController {
  async login (contex) {
    const { request, response, auth } = contex
    const { user } = request.all()
    const logged = await auth.attempt(user.email, user.password, true)
    return response.json(logged)
  }

  async register (contex) {
    const { request, response } = contex
    const { user } = request.all()
    const userInstance = new USER()

    userInstance.username = user.email
    userInstance.email = user.email
    userInstance.password = user.password

    await userInstance.save()
    return response.json(userInstance)
  }

  async profile (contex) {
    const { request, response, auth } = contex
    let user = await auth.getUser()
    const userInput = request.input('user')
    user.email = userInput['email']
    user.username = userInput['username']

    await user.save()

    const logget = await auth.generate(user, true)
    return response.json(logget)
  }
}

module.exports = AuthController
