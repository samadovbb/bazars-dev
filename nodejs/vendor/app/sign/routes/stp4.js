const express = require('express')
const app = express.Router()

app.get('/', require('../controllers/stp4/get/stp4'))

app.post('/', require('../controllers/stp4/post/stp4'))

module.exports = app