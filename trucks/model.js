const db = require('../db/dbConfig')


module.exports.getAllTrucks = async () => db('trucks')
    .select('*')

module.exports.getTruckLocationByID = async id => db('truck_locations')
    .where({ id })

