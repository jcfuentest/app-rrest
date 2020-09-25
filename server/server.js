const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./config/config')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {

    let body = req.body;
    res.json({
        body
    })
})
app.get('/usuario', function(req, res) {
    res.json('get app usuario pruea')
})

app.post('/usuario', function(req, res) {
    let body = req.body
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            message: 'el nombre debe estar si o si'
        })

    } else {
        res.json({
            body
        })
    }


})


app.listen(process.env.PORT, () => {
    console.log('escuchando al puerto 3000')
})