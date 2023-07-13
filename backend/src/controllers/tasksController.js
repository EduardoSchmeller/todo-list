const tasksModel = require ('../models/taskModel.js');

const getAll = async (req, res) => {
  const { status } = req.query;
  let tasks;

  if (status) {
    tasks = await tasksModel.filterTasks(status);
  } else {
    tasks = await tasksModel.getAll();
  }

  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const createdTask = await tasksModel.createTask(req.body);

  return res.status(201).json(createdTask);
};

const deleteTask = async (req,res) => {
  const { taskId } = req.params;

  await tasksModel.deleteTask(taskId);
  return res.status(204).json();
};

const updateTask = async (req,res) => {
  const { taskId } = req.params;

  await tasksModel.updateTask(taskId,req.body);

  return res.status(204).json();
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};