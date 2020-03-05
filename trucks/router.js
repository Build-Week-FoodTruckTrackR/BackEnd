const router = require('express').Router()

const { getAllTrucks } = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const trucks = await getAllTrucks()

        res.json(trucks)
    } catch (e) {
        next(e)
    }
})

router.post('/register', (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
})

module.exports = router