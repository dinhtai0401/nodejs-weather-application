const express = require('express') 
const request = require('request')
const path = require('path')
const hbs = require('hbs')
const { title } = require('process')
const geocoding = require('../utils/geocode')
const forecast = require('../utils/forecast')

const app = express()
const port = process.env.PORT || 3000


const pathDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../tempalates/views')
const partialsPath = path.join(__dirname, '../tempalates/partials')



app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(pathDirectory))
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        name: 'Home page',
        author: 'Andrew'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        name: 'Help',
        author: 'Andrew'
    })
})


app.get('/about', (req,res) => {
    res.render('about', {
        name: 'About',
        author: 'Andrew'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide a address'
        })
    }else{
        geocoding(req.query.address , (error, {lat, long} = {}) => {
            if(error) {
                return res.send({error})
            }
            forecast(lat, long, (error, {feelslike, temperature}) => {
                if(error) {
                    return res.send({error})
                }
                res.send({
                    location: req.query.address,
                    feelslike: feelslike
                })
              })
        })
    }
})

app.get('/products', (req,res) => {
    if (!req.query.search)  {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: []
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        message: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Page not found'
    })
})




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})