exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('truck_locations')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('truck_locations').insert([
                { departure_time: Date.now() + 80000, arrival_time: Date.now() - 500, longitude: -118.363140, latitude: 34.083980 },
                { departure_time: Date.now() + 180000, arrival_time: Date.now() - 5000, longitude: -118.319347, latitude: 34.040925 },
                { departure_time: Date.now() + 8000, arrival_time: Date.now() - 50000, longitude: -118.314294, latitude: 34.038471 },
               
            ]);
        });
};