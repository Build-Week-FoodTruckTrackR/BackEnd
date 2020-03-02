// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://ojqxokwy:tE9eyZ1AJoSi_6kA8J3KsHb8SmhL5XR_@raja.db.elephantsql.com:5432/ojqxokwy',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      // tableName: 'knex_migrations'
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: "postgres://ojqxokwy:tE9eyZ1AJoSi_6kA8J3KsHb8SmhL5XR_@raja.db.elephantsql.com:5432/ojqxokwy",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
       directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};
