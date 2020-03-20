'use strict'

const Mail = use('Mail')
const User = use('App/Models/User')
const Booking = use('App/Models/Booking')

class BookingController {
  async sendConfirmBooking({
    request,
    response
  }) {
    const user = await User.find(1)
    const booking = await Booking.find(1)

    if (user && booking) {

      //TODO: Generate Uniq Token
      const token = "aa1234"

      const data = {
        booking,
        token,
      }

      booking.token = token
      booking.status = "WAITING"
      await booking.save()

      Mail.send('booking_mail', data, (message) => {
        message.to(user.email)
        message.from('demo@demo-adonis.com')
        message.subject(`Booking Confirmation #${booking.id}`)
      })

      return response.json({
        "message": "send booking confirm successful!"
      })
    } else {
      return response.json({
        "message": "send booking confirm fail!"
      })
    }
  }

  async confirmBooking({
    request,
    response
  }) {
    const query = request.get()
    if (query.token) {
      const booking = await Booking.query().where('token', query.token).first()
      if (booking) {
        booking.status = "CONFIRM"
        booking.token = ""

        await booking.save()

        return response.json({
          "message": "booking confirm successful!"
        })
      }
    } else {
      return response.json({
        "message": "token not exist"
      })
    }
  }

}

module.exports = BookingController
