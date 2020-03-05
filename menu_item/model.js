const db = require('../db/dbConfig')

module.exports.addMenuItem = ({ item_name, item_photo_urls, item_price }) => db('menu_items').insert({ item_name, item_photo_urls, item_price }).returning('id')

module.exports.updateMenuItem = ({ item_name, item_photo_urls, item_price }) => db('menu_items').update({ item_name, item_photo_urls, item_price }).returning('id')

module.exports.removeMenuItem = id => db('menu_items').del().where({ id })

module.exports.getMenuItemByID = id => db('menu_items').select('*').where({ id })

module.exports.getAllMenuItems = () => db('menu_items')
