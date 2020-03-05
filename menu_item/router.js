const router = require('express').Route()

const { getMenuItemByID, addMenuItem, updateMenuItem, removeMenuItem } = require('./model')

router.get('/', async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
})

module.exports = router