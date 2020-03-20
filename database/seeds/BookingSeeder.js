'use strict'

/*
|--------------------------------------------------------------------------
| BookingSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Booking = use('App/Models/Booking')
const User = use('App/Models/User')

class BookingSeeder {
  async run() {
    const user = await User.create({
      username: "John Koner",
      email: "nainatjab999@gmail.com",
      password: "123456"
    })
    await Booking.create({
      user_id: user.id,
      date: "12-02-2020",
      time: "16.30",
    })
  }
}

module.exports = BookingSeeder
