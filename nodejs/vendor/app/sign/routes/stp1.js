const express = require('express')
const app = express.Router()

// get
app.get('/', require('../controllers/stp1/get/stp1'))

// post & send sms
app.post('/', require('../controllers/stp1/post/stp1'))

// check sms
app.post('/verify', require('../controllers/stp1/post/verify'))

module.exports = app