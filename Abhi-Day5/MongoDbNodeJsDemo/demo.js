//1. include mongoose

const mongoose = require('mongoose');

//2. Connect to mongodb(atlas)

mongoose.connect(
    'mongodb+srv://devuser:abcd1234@cluster0-mlro7.mongodb.net/TaskManager?retryWrites=true&w=majority',
    {
        useNewUrlParser:true, //new technique of parsing the database url
        useUnifiedTopology:true
    },
    ()=> console.log('DB Connected')
)
//3. Create a schema for tasks collection

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

//4. Create a Model for Tasks Collection

const Task = mongoose.model('Task',TaskSchema,'task')


//5. Query the DB (tasks Collection) through the task model

Task.find().then(
    data=>{
        console.log(data)
    }
).catch(
    err=>{
        console.log(err)
    }
)
console.log('Finding one')
Task.findOne().then(
    data=>{
        console.log(data)
    }
).catch(
    err=>{
        console.log(err)
    }
)

//const task = await Task.find({completed:true},{title :true})

//console.log(task)cd .