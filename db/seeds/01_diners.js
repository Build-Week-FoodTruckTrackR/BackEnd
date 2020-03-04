const { hashPassword } = require('../../authHelpers')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('diners')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('diners').insert([
        { username: 'Amy', password: hashPassword("lala"), longitude: -118.358078, latitude: 34.063381, favorite_trucks: [1] },
        { username: 'Bobby', password: hashPassword("lala"), longitude: -118.339058, latitude: 34.083260, favorite_trucks: [1, 2] },
        { username: 'Chau', password: hashPassword("lala"), longitude: -118.268112, latitude: 34.089439, favorite_trucks: [1, 2, 3] }
      ]);
    });
};
