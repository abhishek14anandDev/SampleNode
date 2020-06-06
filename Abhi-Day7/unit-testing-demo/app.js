const express = require('express')

const app = express()

app.get('/tasks',(req,res) => res.send('Task Works'))
app.get('/user', (req,res)=> res.send('User wrks'))

module.exports = app