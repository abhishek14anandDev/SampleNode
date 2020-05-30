const mongoose  = require('mongoose')

//3. Create a schema for tasks collection

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

//4. Create a Model for Tasks Collection

const Task = mongoose.model('Task',TaskSchema,'task')

module.exports = Task;

