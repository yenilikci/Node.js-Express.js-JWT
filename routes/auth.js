const router = require('express').Router()
const User = require('../models/User')

router.post('/register', async (req,res) => {
    //res.send('Register işlemi gerçekleşti')
    const user = new User({
        isim:req.body.isim,
        email:req.body.email,
        parola:req.body.parola
    })

    try{
        //kullanıcı kaydetme işlemi
        const savedUser = await user.save() 
        //api'ye göndermek
        res.send(savedUser)
    } catch (error) {
        //hata varsa 404, api -> error message
        res.status(400).send(error)
    }
    
})

module.exports = router