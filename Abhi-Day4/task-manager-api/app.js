const express = require('express')
const logger = require('morgan')
const bodyParser =require('body-parser')

const tasksRouter = require('./routes/tasks')
const usersRouter = require('./routes/users')

const app = express()

//this is used for Auth check for all api
const dunnyMiddleware = (req,res,next)=>{
    console.log('Inside dummy middleware')

    next()
}

app.use(dunnyMiddleware)

app.use((logger('dev')))

//body parser  // used for POST calls
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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