const express = require('express')
const app = express()
//auth route dahil etmek
const authRoute = require('./routes/auth')

//middleware ile çağıralım, ex: /api/user/register
app.use('/api/user',authRoute)

app.listen('3000',() => {
    console.log('server ayakta')
}) 