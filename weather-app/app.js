const request = require('request');
const geocode = require('./utils/geocode');

geocode('Sofia', (error, data) => {
    console.log(error);
    console.log(data);
})