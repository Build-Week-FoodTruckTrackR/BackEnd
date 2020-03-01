// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      // tableName: 'knex_migrations'
      directory: './db/migrations'
    },
    seeds: {
      directory: '/db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
       directory: './db/migrations'
    },
    seeds: {
      directory: '/db/seeds'
    }
  }

};
