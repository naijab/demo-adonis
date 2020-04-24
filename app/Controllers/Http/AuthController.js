'use strict'

const Mail = use('Mail')
const User = use('App/Models/User')
const Booking = use('App/Models/Booking')
const LoginUserRules = use('App/Validators/LoginUser')
const LoginService = use('App/Services/LoginService')
const {
  validateAll
} = use('Validator')

class BookingController {
  async login({
    request,
    response,
    auth,
  }) {
    try {
      await validateAll(request.only('email', 'password'), LoginUserRules)
      const user = await auth.attempt(request.input('email'), request.input('password'));
      if (user) {
        return response.json({
          token: user
        })
      }
    } catch (error) {
      return response.status(400).json({
        error: error
      })
    }
  }

  async me({
    request,
    response,
    auth,
  }) {
    try {
      const user = await auth.getUser();
      if (user) {
        return response.json({
          user: user
        })
      }
    } catch (error) {
      return response.status(400).json({
        error: error
      })
    }
  }
}

module.exports = BookingController
