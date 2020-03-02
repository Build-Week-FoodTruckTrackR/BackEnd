const db = require('../db/dbConfig')

module.exports.registerOperator = async (username, password, trucks_owned) =>
    await db('operators')
        .insert({ username, password, trucks_owned })
        .returning(['username', 'id', 'trucks_owned'])

module.exports.getOperatorByUsername = async username =>
    await db('operators').select('username', 'password', 'id').where({ username })

module.exports.getUsers = async (department) => {
    if (department) {
        return await db('users').where({ department })
    }
    return await db('users')
}