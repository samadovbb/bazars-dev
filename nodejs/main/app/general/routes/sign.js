const express = require('express')

const app = express.Router()

// check phone number GET
app.get('/', require('../controllers/sign/get/sign'))

// check phone number POST
app.post('/', require('../controllers/sign/post/sign'))

// sms validation GET
app.get('/sms_validation', require('../controllers/sign/get/sms_verify'))

// sms validation POST
app.post('/sms_validation', require('../controllers/sign/post/sms_verify'))

// get sms callback query
app.post('/sms_callback', require('../controllers/sign/post/sms_callback'))

// redirect to sign post
app.get('/out', require('../controllers/sign/get/out'))

module.exports = app