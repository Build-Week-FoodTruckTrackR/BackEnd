const db = require('../db/dbConfig')

module.exports.registerOperator = async (username, password) =>
    await db('operators')
        .insert({ username, password })
        .returning(['username', 'id'])

module.exports.getOperatorByUsername = async username =>{
    console.log('getOpBYName', username)
    
    return await db('operators')
        .select('username', 'password', 'id')
        .where({ username })

}

module.exports.getOperatorByID = id => db('operators').select('*').where({id})

module.exports.getAllOperators = () => db('operators')

