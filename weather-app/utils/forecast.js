const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/dfa639688d20acd5cc44546293ccd894/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}?units=si`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find the location', undefined)
        } else {
            const data = response.body.currently
            callback(undefined, `${response.body.daily.data[0].summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast