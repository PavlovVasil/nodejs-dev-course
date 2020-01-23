const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Sofia', (error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(data)
        }
        console.log(data.location);
        console.log(forecastData);
    })
})