const express = require('express')

const app = express()

//get first parameter is route
app.get('/', (req, res) => {
    res.send('Home Route Works! Year')
})

app.get('/about-us', (req, res) => {
    res.send('about usfwfwedvsdvsd!')
})

module.exports = app