let express = require('express');
let consign = require('consign')
let bodyParser = require('body-parser')


let app = express()

app.set('view engine','ejs')
app.set('views','./app/views')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended: true}))

consign()
.include('app/routes')
.include('app/models')
.include('app/controllers')
.into(app)

module.exports = app
