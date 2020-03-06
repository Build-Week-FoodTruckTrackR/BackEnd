const router = require('express').Router()

const { getAllTrucks, addTruck, removeTruckByID, updateTruck } = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const trucks = await getAllTrucks()

        res.json(trucks)
    } catch (e) {
        next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { cuisine, current_location } = req.body
        if (!cuisine || !current_location) {
            const incomplete = new Error('Cusine and location data are necessary')
            incomplete.httpStatusCode = 400
            throw incomplete
        }

        const newTruck = await addTruck(req.body)
        console.log('newTruck', newTruck)
        res.json(newTruck)
    } catch (error) {
        next(error)
    }
})

router.post('/register', (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
})

module.exports = router