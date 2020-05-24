exports.getTasks =(req,res)=>{
    res.send('controller :: getTasks( works')
}

exports.addTasks = (req,res)=>{
    res.send('controller :: addTask() works!')
}

exports.deleteTask=(req,res)=>{
    res.send('Controller :: deleteTask() works')
}

exports.updateTasks = (req,res)=>{
    res.send('controller :: PutTask() works')
}

exports.completeTasks = (req,res)=>{
    res.send('controller :: PatchTask works')
}