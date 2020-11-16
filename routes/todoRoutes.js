const TODO = require('../controller/todoController');
const express = require('express');
const router = express.Router();


router.post('/', TODO.addTask);
router.get('/',TODO.getTask);
router.post('/delete/:id', TODO.deleteTask);

module.exports = router;

