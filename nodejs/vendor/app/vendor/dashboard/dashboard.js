const express = require('express')
const app = express.Router()

app.get('/', require('./controllers/dashboard'))

module.exports = app