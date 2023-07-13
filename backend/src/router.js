const express = require('express');
const router = express.Router();

const tasksController = require ('./controllers/tasksController'); 
const tasksMiddleware = require ('./middlewares/tasksMiddleare.js');

router.get('/allTasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle,tasksController.createTask);
router.delete('/tasks/:taskId', tasksController.deleteTask);
router.put('/tasks/:taskId', tasksMiddleware.validateFieldTitle, tasksMiddleware.validateFieldStatus, tasksController.updateTask);

module.exports = router;