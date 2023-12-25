const express = require('express')
const api = require('./routes/api.js')

let app = express()

app.use('/api', api)


app.listen(4000)