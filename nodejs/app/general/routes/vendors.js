const express = require('express')
const app = express.Router()
// app.use(express.static('public'))

app.get('/', require('../controllers/vendors/get/vendors'))

app.get('/:id', require('../controllers/vendors/get/vendor'))

app.get('/:id/product/:id', require('../controllers/vendors/get/product'))


module.exports = app