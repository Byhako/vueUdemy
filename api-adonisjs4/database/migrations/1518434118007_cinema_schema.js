'use strict'

const Schema = use('Schema')

class CinemaSchema extends Schema {
  up () {
    this.create('cinemas', (table) => {
      table.increments()
      table.string('cinema_name', 100);
      table.string('cinema_screenshot', 120);
      table.string('cinema_address', 100);
      table.string('cinema_phone', 14);
      table.integer('cinema_seat_capacity');
      table.text('cinema_details');
    })
  }

  down () {
    this.drop('cinemas')
  }
}

module.exports = CinemaSchema
