const forecast = require('./utils/forecast')
const geocoding = require('./utils/geocode')

const command = process.argv[2]

if(!command){

}else{
    geocoding(command, (error, {lat, long}) => {
        forecast(lat, long, (error, {feelslike, temperature}) => {
            console.log('Error', error)
            console.log('Data', feelslike + ' ' + temperature)
          })
    })
}

