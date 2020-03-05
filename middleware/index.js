const { verify } = require('jsonwebtoken')
const jwtSecret = process.env.JWTSECRET || 'secret'
const { getDinerByID } = require('../diner/model')

module.exports.authToken = (req, res, next) => {
    try {
        const { authorization } = req.headers

        if (authorization) {
            verify(authorization, jwtSecret, (err, decodedToken) => {
                if (err) {
                    const unauthorized = new Error("Unauthorized")
                    unauthorized.httpStatusCode = 403
                    throw unauthorized

                } else {
                    req.decodedToken = decodedToken;
                    console.log('decodedToken=', decodedToken)
                    next();
                }
            })
        } else {
            const noAuth = new Error('No Authorization Provided')
            noAuth.httpStatusCode = 400
            throw noAuth
        }
    } catch (error) {
        next(error)
    }
}

module.exports.authType = type => (req, res, next) => {
    try {
        if (req.decodedToken.type !== type) {
            const notDiner = new Error("You are not a diner")
            notDiner.httpStatusCode = 401
            throw notDiner
        }

        req.userType=req.decodedToken.type
        next()

    } catch (error) {
        next(error)
    }
}

module.exports.dinerCoords = async (req, res, next) => {
    try {
        const [diner] = await getDinerByID(req.decodedToken.subject)

        req.dinerLon = diner.longitude 
        req.dinerLat = diner.latitude
        req.dinerFavoriteTrucks = diner.favorite_trucks
        next()
    } catch (error) {
        next(error)
    }
}