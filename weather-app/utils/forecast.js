const request = require('request');

const forecast = (longitude, latitude, callback) => {
    
    const url = `https://api.darksky.net/forecast/7d669a1a064ac43fc67a9abb68e6f0c7/${longitude},${latitude}?units=si`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather service!', undefined)
        } else if (response.body.error) {
            console.log('Unable to find location!', undefined)
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${
                response.body.currently.precipProbability}% of rain.`);
        }
    })
}

module.exports = forecast