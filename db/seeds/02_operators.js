const { hashPassword } = require('../../authHelpers')

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('operators')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('operators').insert([
                { username: 'Amber', password: hashPassword("lala"), trucks_owned: [1] },
                { username: 'Billy', password: hashPassword("lala"), trucks_owned: [1, 2,] },
                { username: 'Chris', password: hashPassword("lala"), trucks_owned: [1, 2, 3] }
            ]);
        });
};