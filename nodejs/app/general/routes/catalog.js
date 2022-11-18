const express = require('express')
const app = express.Router()

// get catalog list
app.get('/', require('../controllers/catalog/get/catalog'))

// get catalog by id
app.get('/:id', require('../controllers/catalog/get/catalogByID'))

module.exports = app