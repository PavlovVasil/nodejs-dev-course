const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Sofia', (error, data) => {
    console.log(error);
    console.log(data);
})

forecast(23.33333, 42.7, (error, data) => {
    console.log(error);
    console.log(data);
})