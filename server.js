// Dependencies
let express = require('express')
let app = express()
let path = require('path')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

// Create a mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/bowjs')

// Route path
app.use(require('./app/routes.js'))

// View engine setup
app.set('views', path.join(__dirname, 'app/views'))
app.set('view engine', 'ejs')

// Configure Body Pareser and Cookie Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())

// Use the public folder for static files
app.use(express.static(path.join(__dirname, 'public')))

// Set port to env.Port or default to 8080
app.set('port', process.env.PORT || 8080)
// Listen to port for connections
app.listen(app.get('port'), function () {
  console.log('App listening at port ' + app.get('port'))
})
