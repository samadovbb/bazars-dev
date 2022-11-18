const express = require('express')
const app = express.Router()

app.use('/stp1', require('./routes/stp1'))

app.use('/stp2', require('./routes/stp2'))

app.use('/stp3', require('./routes/stp3'))

app.use('/stp4', require('./routes/stp4'))

app.use('/in', require('./routes/in'))

module.exports = app