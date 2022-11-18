const express = require('express')
const app = express.Router()
const upload = require('../general/middlewares/fileUpload')

// get profile
app.get('/profile', require('./controllers/get/profile'))

// update profile
app.post('/profile', [upload('userImages'), require('./controllers/post/profile')])

app.get('/orders', require('./controllers/get/orders'))

app.get('/program', require('./controllers/get/program'))

app.get('/history', require('./controllers/get/history'))

app.get('/returned', require('./controllers/get/returned'))

app.get('/change', require('./controllers/get/changePWD'))

app.get('/checkout', require('./controllers/get/checkout'))

app.get('/wishlist', require('./controllers/get/wishlist'))

module.exports = app