const TODO = require('../controller/todoController');
const express = require('express');
const router = express.Router();


router.post('/', TODO.addTask);
router.get('/',TODO.getTask);
router.delete('/:id', TODO.deleteTask);
router.get('/task/:id/update', TODO.getTaskForUpdate);
router.post('/:id', TODO.updateTask)

module.exports = router;

