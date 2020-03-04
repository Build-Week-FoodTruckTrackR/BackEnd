const router = require('express').Router()

const { registerOperator, getOperatorByUsername } = require('./model')
const { hashPassword, comparePasswords, generateToken } = require('../authHelpers')

router.post('/register', async (req, res, next) => {
    try {
        const { username, password, trucks_owned } = req.body

        if (!username || !password || !trucks_owned) {
            const incompleteData = new Error('Username, Password, and a list of trucks you own must be provided')
            incompleteData.httpStatusCode = 400
            throw incompleteData
        }

        const hashedPassword = hashPassword(password)

        const [newUser] = await registerOperator(username, hashedPassword, trucks_owned)

        res.json(newUser)
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (req, res, next) => {
    console.log('operatorsLoginBody', req.body)
    try {
        const { username, password} = req.body

        if (!username || !password ) {
            const incompleteData = new Error('Username, Password must be provided')
            incompleteData.httpStatusCode = 400
            throw incompleteData
        }

        const [operator] = await getOperatorByUsername(username)
        if(!operator){
            const noSuchOperator = new Error('No such operator')
            noSuchOperator.httpStatusCode = 400
            throw noSuchOperator
        }
        console.log('operatorLoginOperator', operator)
        const authenticated = comparePasswords(password, operator.password)
        
        if(!authenticated) {
            const tryAgain = new Error('try again')
            tryAgain.httpStatusCode = 400
            throw tryAgain
        }
        
        const token = generateToken(operator, "operator")

        res.json({token})
    } catch (error) {
        next(error)
    }
})

module.exports = router