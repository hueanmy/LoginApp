
exports.up = function(knex, Promise) {
  return knex.schema.createTable('credential', function(table){
      table.increments('id');
      table.string('provider').nullable();
      table.string('providerID').nullable();
      table.string('username').nullable();
      table.string('password').nullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('credential');
};
