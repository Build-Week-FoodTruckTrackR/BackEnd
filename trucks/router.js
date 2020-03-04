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

module.exports = router