'use strict'

const Schema = use('Schema')

class MovieSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments();
      table.string('movie_name', 120);
      table.string('movie_director', 100);
      table.string('movie_screenshot', 100).nullable();
      table.text('movie_synopsis');
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MovieSchema
