const request = require('request')

const url = 'https://api.darksky.net/forecast/7d669a1a064ac43fc67a9abb68e6f0c7/37.8267,-122.4233?units=si'

request({ url: url, json: true }, (error, response) => {
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${
        response.body.currently.precipProbability}% of rain.`);
})