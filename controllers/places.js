const { application } = require('express');

// creating a router
const router = require('express').Router()


router.get('/', (req, res) => {
    res.send('GET /places')
});

// to import router to other files
module.exports = router