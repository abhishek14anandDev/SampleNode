const task = require('../models/Task')


exports.getTasks =(req,res)=>{
    //res.send('controller :: getTasks( works')

    task.find().then(data=> res.json(data)).catch(err=> res.json(err))
}

exports.addTasks = (req,res)=>{
    // console.log(req.body) //used to get body of POST calls
    // res.send('controller :: addTask() works!')

    const {title,description} = req.body
    //const title = req.body.title;
    //const description = req.body.description;

    task.insertMany([
        { title: title, description: description, completed: false }
    ]).then(data => res.json(data)).catch(err => res.json(err))
}

exports.deleteTask=(req,res)=>{
    console.log(req.body)
    res.send('Controller :: deleteTask() works! ID ::'+ req.params.id)
}

exports.updateTasks = (req,res)=>{
    console.log(req.body)
    res.send('controller :: PutTask() works')
}

exports.completeTasks = (req,res)=>{
    res.send('controller :: PatchTask works')
}