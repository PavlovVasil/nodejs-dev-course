const request = require('request');

const forecast = (latitude, longitude, callback) => {
    
    const url = `https://api.darksky.net/forecast/7d669a1a064ac43fc67a9abb68e6f0c7/${latitude},${longitude}?units=si`

    request({ url: url, json: true }, (error, { body: { error: responseError, daily, currently}}) => {
        if (error) {
            callback('Unable to connect to the weather service!', undefined)
        } else if (responseError) {
            console.log('Unable to find location!', undefined)
        } else {
            callback(undefined, `${daily.data[0].summary} It is currently ${currently.temperature} degrees out. There is a ${
                currently.precipProbability}% of rain.`);
        }
    })
}

module.exports = forecast