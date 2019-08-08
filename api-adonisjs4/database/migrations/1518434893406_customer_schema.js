'use strict'

const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.string('customer_phone', 14).nullable();
      table.string('customer_credit_card', 40);
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
