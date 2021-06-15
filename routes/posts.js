const router = require('express').Router()
const authVerify = require('./tokenDogrulama')

router.get('/',authVerify,(req,res) => {
    res.json({
        posts:{
            baslik:'Post başlık',
            aciklama:'Post açıklama'
        }
    })
})

module.exports = router