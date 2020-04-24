'use strict'

class HelloService {
  //afterSendMail = callback func
  static async hello(afterSendMail) {
    //Todo: send mail
    console.log('Call 1. in HelloService.hello()')
    afterSendMail(true, '16.30')
  }
}

module.exports = HelloService
