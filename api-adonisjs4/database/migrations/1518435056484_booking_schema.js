'use strict'

const Schema = use('Schema')

class BookingSchema extends Schema {
  up () {
    this.create('bookings', (table) => {
      table.increments();
      table.integer('customer_id').unsigned();
      table.foreign('customer_id').references('customers.id');
      table.integer('movie_showing_time_id').unsigned().comment('qué película verán');
      table.foreign('movie_showing_time_id').references('movie_showing_times.id');
      table.dateTime('booking_made_date').comment('Cuando se ha realizado');
      table.integer('booking_seat_count').comment('Número asientos reservados');
    })
  }

  down () {
    this.drop('bookings')
  }
}

module.exports = BookingSchema
