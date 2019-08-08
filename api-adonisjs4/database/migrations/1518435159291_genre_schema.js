'use strict'

const Schema = use('Schema')

class GenreSchema extends Schema {
  up () {
    this.create('genres', (table) => {
      table.increments();
      table.string('genre_name', 100);
    })
  }

  down () {
    this.drop('genres')
  }
}

module.exports = GenreSchema
