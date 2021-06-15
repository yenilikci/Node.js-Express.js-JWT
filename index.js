//dotenv config için
const dotenv = require('dotenv')
//express app
const express = require('express')
const app = express()
//veritabanı işlemleri
const mongoose = require('mongoose')
//auth route dahil etmek
const authRoute = require('./routes/auth')

dotenv.config()

mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () => {console.log('DB bağlantısı başarılı')})

//json veri bodysi için
app.use(express.json())

//middleware ile çağıralım, ex: /api/user/register
app.use('/api/user',authRoute)

app.listen(process.env.PORT,() => {
    console.log('server ayakta')
}) 