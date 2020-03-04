const db = require('../db/dbConfig')


module.exports.getAllTrucks = async () => db('trucks')
    .select('*')

module.exports.getTruckLocationByID = async id => db('truck_locations')
    .where({ id })

module.exports.getTruckById = async id => db('trucks')
    .select('cuisine', 'img_url', 'customer_rating_avg')
    .where({id})

