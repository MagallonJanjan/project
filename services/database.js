const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose
      .connect("mongodb://127.0.0.1/todoList", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
      .then(() => {
        console.log("Connected to database");
      })
      .catch((error) => console.log(error));
  };
  
  module.exports = {
    connect: connectToDatabase,
  };