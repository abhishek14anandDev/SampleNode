const express = require('express')
const PORT = 8000

const path = require('path')

console.log('File Name :: ',__filename)
console.log('Dir Name :: ',__dirname)
console.log('Home File Path :: ', path.join(__dirname,'/views/index.html'))

const app = express()

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'/views/index.html')))
app.get('/about-us',(req,res)=>res.send('<h1>About us Page</h1>'))
app.get('/contact-us',(req,res)=>res.send('<h1>Contact us Page</h1>'))
app.get('/services',(req,res)=>res.send('<h1>Services us Page</h1>'))
app.get('/*',(req,res)=>res.send('<h1>About us Page</h1>'))

app.listen(PORT,()=>console.log('Express server started'))