const router = require('express').Router()

const { registerDiner, getDinerByUsername, updateDinerLocation } = require('./model')
const { getAllTrucks } = require('../trucks/model')
const { hashPassword, comparePasswords, generateToken } = require('../authHelpers')

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
        console.log(
            'dinerLoginBOdy',req.body
        )
        if (!username || !password ) {
            const incompleteData = new Error('Username, Password must be provided')
            incompleteData.httpStatusCode = 400
            throw incompleteData
        }

        const [diner] = await getDinerByUsername(username)

        if(!diner){
            const noSuchDiner = new Error('No such diner')
            noSuchDiner.httpStatusCode = 400
            throw noSuchDiner
        }
        console.log('dinerLoginDiner', diner)
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

router.get('/radius', authToken, authType('diner'), dinerCoords, async (req, res, next) => {
    try {
        const trucks = await getAllTrucks()
        res.json(trucks)

    } catch (error) {
        next(error)
    }
})

module.exports = router