const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicGF2bG92dmFzaWwiLCJhIjoiY2s1b2J2MWhkMDIyaTNtcDk0NTBqZzFlaiJ9.ogfzl-EOfLJr9iF7v0fAzg&limit=1`
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode