exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('operators')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('operators').insert([
                { username: 'Amber', password: "lala", trucks_owned: [1] },
                { username: 'Billy', password: "lala", trucks_owned: [1, 2,] },
                { username: 'Chris', password: "lala", trucks_owned: [1, 2, 3] }
            ]);
        });
};