const axios = require('axios')
Number.prototype.toRadians = function() { return this * Math.PI / 180; };
Number.prototype.toDegrees = function() { return this * 180 / Math.PI; }

module.exports.coordsToAddress = async (long, lat) => {
    try {
        const { data } = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.LALA}`
        )
        return { address: data.results[0].formatted_address }
    } catch (error) {
        throw error
    }
}

module.exports.haversine = (long1, lat1, long2, lat2) => {
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2 - lat1).toRadians();
    var Δλ = (long2 - long1).toRadians();

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;
    return d
}