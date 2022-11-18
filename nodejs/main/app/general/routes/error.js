const express = require('express')
const app = express.Router()

app.get('*', require('../controllers/error/404'))

module.exports = app