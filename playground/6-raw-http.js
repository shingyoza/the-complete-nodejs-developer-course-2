const https = require('https')
const url = 'https://api.darksky.net/forecast/dfa639688d20acd5cc44546293ccd894/40,-75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk
    })

    response.on('end', () => {
        console.log(JSON.parse(data))
    })
})

request.on('error', (error) => {
    console.log('an error',error)
})

request.end()