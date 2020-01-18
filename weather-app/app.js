const request = require('request')

const url = 'https://api.darksky.net/forecast/7d669a1a064ac43fc67a9abb68e6f0c7/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})