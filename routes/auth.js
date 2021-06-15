const router = require('express').Router()

router.post('/register',(req,res) => {
    res.send('Register işlemi gerçekleşti')
})

module.exports = router