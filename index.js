// get the environment variables
require('dotenv').config()

// Require needed node modules
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places')) // added in front of any other path we define in the controller.

// Declare routes that people can visit on the application.
app.get('/', (req, res) => {
    res.send(`Hello World`)
});

// Making a Wildcard Route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>') // 404 Not Found
});

// Listening
app.listen(process.env.PORT)