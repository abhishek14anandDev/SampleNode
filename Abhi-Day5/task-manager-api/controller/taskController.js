exports.getTasks =(req,res)=>{
    res.send('controller :: getTasks( works')
}

exports.addTasks = (req,res)=>{
    console.log(req.body) //used to get body of POST calls
    res.send('controller :: addTask() works!')
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