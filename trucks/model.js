const db = require('../db/dbConfig')

module.exports.getAllTrucks = () => db('trucks')
    .select('*')

module.exports.getTruckLocationByID = id => db('truck_locations')
    .where({ id })

module.exports.getTruckById = id => db('trucks')
    .select('cuisine', 'img_url', 'customer_rating_avg', 'id')
    .where({ id })

module.exports.addTruck = ({ img_url, cuisine, menu, current_location, next_location }) => {
    return db('trucks')
    .insert({ img_url, cuisine, menu, current_location, next_location })
    .returning('*')
}

module.exports.updateTruck = ({ id, img_url, cuisine, menu, current_location, next_location }) => {
    return db('trucks').update({ img_url, cuisine, menu, current_location, next_location }).where({ id })
}

module.exports.removeTruckByID = id => db('trucks').del().where({ id })

