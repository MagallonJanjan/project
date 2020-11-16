const mongoose = require('mongoose');

let todoSchema = mongoose.Schema({
    task: String,
    description: String,
    date:String
});

module.exports = mongoose.model('todo', todoSchema);