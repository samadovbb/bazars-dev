const express = require('express')
const { PORT } = require('./config/config.json').app
const app = express()

// app
app.use(require('./app/app'))

app.listen(PORT, ()=>{
    console.log(`Server has started =>\nhttp://localhost:${PORT}`)
})