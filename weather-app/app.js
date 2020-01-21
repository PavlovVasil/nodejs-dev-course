const request = require('request')

// const url = 'https://api.darksky.net/forecast/7d669a1a064ac43fc67a9abb68e6f0c7/37.8267,-122.4233?units=si'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location!')
//     } else {
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${
//             response.body.currently.precipProbability}% of rain.`);
//     }
// })

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Sofia.json?access_token=pk.eyJ1IjoicGF2bG92dmFzaWwiLCJhIjoiY2s1b2J2MWhkMDIyaTNtcDk0NTBqZzFlaiJ9.ogfzl-EOfLJr9iF7v0fAzg&limit=1'
// request({url: geocodeUrl, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search!')
//     } else {
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];
//         console.log(`Longitude: ${longitude}, latitude: ${latitude}`)
//     }
// })

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
            }
        }
    })
}

geocode('Sofia', (error, data) => {
    console.log(error);
    console.log(data);
})