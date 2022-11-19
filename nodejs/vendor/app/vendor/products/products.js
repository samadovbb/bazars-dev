const express = require('express')
const app = express.Router()

app.get('/', require('./controllers/get/products'))

app.get('/add', require('./controllers/get/addProduct'))

app.post('/add', require('./controllers/post/addProduct'))

module.exports = app