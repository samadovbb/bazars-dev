const express = require('express')
const app = express.Router()

app.get('/', require('../controllers/in/get/in'))

app.post('/', require('../controllers/in/post/in'))

module.exports = app