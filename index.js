// get the environment variables
require('dotenv').config()

// Require needed node modules
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places')) // added in front of any other path we define in the controller.

// Declare routes that people can visit on the application.
app.get('/', (req, res) => {
    res.render(`home`)
});

// Making a Wildcard Route
app.get('*', (req, res) => {
    res.render('error404') // 404 Not Found
});

// Listening
app.listen(process.env.PORT)