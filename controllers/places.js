// creating a router
const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Get /places')
});


// to import router to other files
module.exports = router