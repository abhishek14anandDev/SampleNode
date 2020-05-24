const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')

//router.post('/login',(req,res)=>res.send('login works'))
//router.post('/register',(req,res)=>res.send('register works'))

router.post('/login', userController.login)
router.post('/register',userController.register)

module.exports = router