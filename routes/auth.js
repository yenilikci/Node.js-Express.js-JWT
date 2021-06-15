const router = require('express').Router()
//model
const User = require('../models/User')
//validation
const Joi = require('@hapi/joi')

//validation schema
const validateSchema = Joi.object({
    isim:Joi.string().min(6).required(),
    email:Joi.string().min(6).required().email(),
    parola:Joi.string().min(6).required()
})

router.post('/register', async (req,res) => {
    //res.send('Register işlemi gerçekleşti')

    //kullanıcı - valid şema uyum kontrolü
    //res.send(validateSchema.validate(req.body))

    const {error} = validateSchema.validate(req.body)

    //validasyon sağlanamazsa 400 dön , hata detay mesajını gönder
    if(error) return res.status(400).send(error.details[0].message)

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