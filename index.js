// Require needed node modules
const express = require('express')
const app = express()

// Declare routes that people can visit on the application.
app.get('/', (req, res) => {
    res.send(`Hello World`)
});

