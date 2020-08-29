const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=88cf5b9e7677efcc61967dc686c9016e&query=' + lat + ',' + long
 
    request ({url, json: true},(error, {body}) => {
        if(error){
            callback('Unbale to connect wifi', undefined)
        }else if(body.error){
            callback('Unable to find the location', undefined)
        }else{
            callback(undefined,{
                    feelslike: body.current.feelslike,
                    temperature: body.current.temperature      
            })
        }
    })
}

module.exports = forecast