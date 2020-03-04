const axios = require('axios')

module.exports.coordsToAddress = async (long, lat) => {
    try {
        const {data} = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.LALA}`
        )
        return { address: data.results[0].formatted_address}
    } catch (error) {
        throw error
    }
}