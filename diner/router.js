const router = require('express').Router()

const { registerDiner, getDinerByUsername, updateDinerLocation } = require('./model')
const { getTruckById, getTruckLocationByID } = require('../trucks/model')
const { hashPassword, comparePasswords, generateToken } = require('../authHelpers')
const { coordsToAddress } = require('../services')

const { authToken, authType, dinerCoords } = require('../middleware')

router.post('/register', async (req, res, next) => {
    try {
        const { username, password, favorite_trucks } = req.body

        if (!username || !password || !favorite_trucks) {
            const incompleteData = new Error('Username, Password, and a list of trucks you like must be provided')
            incompleteData.httpStatusCode = 400
            throw incompleteData
        }

        const hashedPassword = hashPassword(password)

        const [newUser] = await registerDiner(username, hashedPassword, favorite_trucks)

        res.json(newUser)
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body
        
        if (!username || !password) {
            const incompleteData = new Error('Username, Password must be provided')
            incompleteData.httpStatusCode = 400
            throw incompleteData
        }

        const [diner] = await getDinerByUsername(username)

        if (!diner) {
            const noSuchDiner = new Error('No such diner')
            noSuchDiner.httpStatusCode = 400
            throw noSuchDiner
        }

        const authenticated = comparePasswords(password, diner.password)

        if (!authenticated) {
            const tryAgain = new Error('try again')
            tryAgain.httpStatusCode = 400
            throw tryAgain
        }

        // await updateDinerLocation(diner.id, longitude, latitude)

        const token = generateToken(diner, "diner")

        res.json({ token })
    } catch (error) {
        next(error)
    }
})

router.get('/favoriteTrucks', authToken, authType('diner'), dinerCoords, async (req, res, next) => {
    try {
        console.log('zzz', req.dinerFavoriteTrucks)

        const truckDataPromises = []
        for(let i = 0; i < req.dinerFavoriteTrucks.length; i++) {
            truckDataPromises.push(getTruckById(req.dinerFavoriteTrucks[i]))
        }

        const truckDataNotFlat = await Promise.all(truckDataPromises)
        const truckData = truckDataNotFlat.flat()
        const favoriteTruckAddresses = []
        for (let i = 0; i < req.dinerFavoriteTrucks.length; i++) { // push promises onto arr to get actual coords from locations id
            favoriteTruckAddresses.push(getTruckLocationByID(req.dinerFavoriteTrucks[i]))
        }

        const trucks = await Promise.all(favoriteTruckAddresses) // run Promise.all on arr of promises

        const flatTrucks = trucks.flat() // flatten each element, since getTruckLocationById returns an arr

        const coordsToAddresses = []
        for (let i = 0; i < flatTrucks.length; i++) {
            const { longitude, latitude } = flatTrucks[i]
            coordsToAddresses.push(coordsToAddress(longitude, latitude)) // Do the same to get addresses for coords
        }

        const trucksWithAddr = await Promise.all(coordsToAddresses) // Another promise.all

        const combined = []
        for(let i = 0; i < flatTrucks.length; i++){ // Combine addresses and trucks array
            combined.push({...flatTrucks[i], ...trucksWithAddr[i], ...truckData[i]})
        }
        
        res.json(combined)
    } catch (error) {
        next(error)
    }
})

router.get('/favoriteTrucks')

module.exports = router