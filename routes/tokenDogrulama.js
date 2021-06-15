const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    //res ile header'a aktardığımız token'ı req ile çağıralım
    const token = req.header('auth-token')
    //token yoksa
    if(!token) return res.status(401).send('İzin verilmedi')
    //varsa
    try {
        //token verify edilmeli (token,secret key)
        const dogrulama = jwt.verify(token,process.env.TOKEN_SECRET)
        req.kullanici = dogrulama
        console.log(req.kullanici)
        next()
    } catch (error) { 
        res.status(400).send('Yanlış token')
    }
}