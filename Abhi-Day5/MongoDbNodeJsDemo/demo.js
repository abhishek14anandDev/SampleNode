//1. include mongoose

const mongoose = require('mongoose');

//2. Connect to mongodb(atlas)

mongoose.connect('mongodb+srv://devuser:abcd1234@cluster0-mlro7.mongodb.net/TaskManager?retryWrites=true&w=majority')
//3. Create a schema for tasks collection

//4. Create a Model for Tasks Collection

//5. Query the DB (tasks Collection) through the task model1