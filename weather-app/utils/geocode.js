const request = require('request')

const geocoding = (location, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location +'.json?access_token=pk.eyJ1IjoiZGluaHRhaSIsImEiOiJja2U0NngwMmgwcTR3MnNsZmV4Y2s1am4zIn0.yUWivf4Xm4mL9oADs6UbaA&limit=1'

    request ({url, json: true},(error, {body}) => {
        if(error){
            callback('Unbale to connect wifi', undefined)
        }else if(body.features.length === 0 ){
            callback('Unable to find the location', undefined)
        }else{
            callback(undefined,{
                lat: body.features[0].center[1],
                long: body.features[0].center[0]
            }
        )}
    })
}



module.exports = geocoding