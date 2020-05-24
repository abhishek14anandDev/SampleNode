const express = require('express')
const router = express.Router()

router.post('/login',(req,res)=>res.send('login works'))
router.post('/register',(req,res)=>res.send('register works'))

module.exports = router