const db = require('../db/dbConfig')


module.exports.getAllTrucks = async() => db('trucks').select('*')