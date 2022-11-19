const express = require('express')
const app = express.Router()

app.get('/', require('../controllers/productList/get/productList'))

module.exports = app