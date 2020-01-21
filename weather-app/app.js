const request = require('request')

const url = 'https://api.darksky.net/forecast/7d669a1a064ac43fc67a9abb68e6f0c7/37.8267,-122.4233?units=si'

request({ url: url, json: true }, (error, response) => {
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${
        response.body.currently.precipProbability}% of rain.`);
})

const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGF2bG92dmFzaWwiLCJhIjoiY2s1b2J2MWhkMDIyaTNtcDk0NTBqZzFlaiJ9.ogfzl-EOfLJr9iF7v0fAzg&limit=1'
request({url: mapUrl, json: true}, (error, response) => {
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    console.log(`Longitude: ${longitude}, latitude: ${latitude}`)
})