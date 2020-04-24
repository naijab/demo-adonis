'use strict'

class LoginUser {
  get rules() {
    return {
      email: 'required',
      password: 'required'
    }
  }
}

module.exports = LoginUser
