const express = require('express')
const logger = require('morgan')

const tasksRouter = require('./routes/tasks')
const usersRouter = require('./routes/users')

const app = express()

app.use((logger('dev')))

app.use('/tasks',tasksRouter)
app.use('/',usersRouter)

//get first parameter is route
app.get('/', (req, res) => {
    res.send('Home Route Works! Year')
})

// app.get('/about-us', (req, res) => {
//     res.send('about usfwfwedvsdvsd!')
// })

module.exports = app