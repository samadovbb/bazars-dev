const express = require('express')
const app = express.Router()

app.get('/', require('../controllers/stp2/get/stp2'))

app.post('/', require('../controllers/stp2/post/stp2'))

module.exports = app