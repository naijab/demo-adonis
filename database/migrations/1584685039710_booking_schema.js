'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingSchema extends Schema {
  up() {
    this.create('bookings', (table) => {
      table.increments()
      table.integer('user_id')
      table.string('date')
      table.string('time')
      table.enum('status', ['PENDING', 'WAITING', 'CONFIRM', 'COMPLETED']).defaultTo('PENDING')
      table.string('token')
      table.timestamps()
    })
  }

  down() {
    this.drop('bookings')
  }
}

module.exports = BookingSchema
