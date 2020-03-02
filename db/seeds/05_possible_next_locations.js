exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('possible_next_locations')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('possible_next_locations').insert([
                { longitude: -118.363140, latitude: 34.083980 },
                { longitude: -118.319347, latitude: 34.040925 },
                { longitude: -118.314294, latitude: 34.038471 },

            ]);
        });
};