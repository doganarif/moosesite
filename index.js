const express = require('express')
const app = express()
const port = 3000



app.use('/', express.static('.'))

app.listen(process.env.PORT || 5000)
