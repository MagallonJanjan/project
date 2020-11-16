const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressSanitizer = require('express-sanitizer')
const methodOverride = require('method-override')
const path = require('path');

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.use(expressSanitizer());
// app.use(express.static("public"));
app.use(express.static(__dirname +'public'));

app.set('views', path.join(__dirname, 'view'));



const database = require("./services/database");
database.connect();

const TaskRoute = require('./routes/todoRoutes');
app.use(TaskRoute);

app.listen(8000, console.log("The server is running on port 8000"));

