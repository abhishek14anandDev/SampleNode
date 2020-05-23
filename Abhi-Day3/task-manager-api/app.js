const express = require('express')

const tasksRouter = require('./routes/tasks')

const app = express()

app.use('/',tasksRouter)

//get first parameter is route
app.get('/', (req, res) => {
    res.send('Home Route Works! Year')
})

// app.get('/about-us', (req, res) => {
//     res.send('about usfwfwedvsdvsd!')
// })

module.exports = app