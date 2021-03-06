const db = require('../db/dbConfig')

module.exports.registerDiner = async (username, password, favorite_trucks) =>
    await db('diners')
        .insert({ username, password, favorite_trucks })
        .returning(['username', 'id', 'favorite_trucks'])

module.exports.getDinerByUsername = async username =>
    await db('diners').select('username', 'password', 'id').where({ username })

module.exports.updateDinerLocation = async (id, longitude, latitude) =>
    await db('diners').where({ id }).update({ longitude, latitude }).returning('*')

module.exports.getDinerByID = async id => await db('diners').select("longitude", "latitude", "favorite_trucks" ).where({id})

module.exports.getAllDiners = async() => await db('diners')

module.exports.getDiners = async (department) => {
    if (department) {
        return await db('users').where({ department })
    }
    return await db('users')
}