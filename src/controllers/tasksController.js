const tasksModel = require("../models/tasksModel");

const createTask = async (req, res) => {
	const task = req.body;
	const createdTask = await tasksModel.createTask(task);

	res.json(createdTask);
};

const removeTask = async (req, res) => {
	const id = req.params.id;
	await tasksModel.removeTask(id);

	res.status(204).json();
};

const updateTask = async (req, res) => {
	const task = req.body;
	const id = req.params.id;

	await tasksModel.updateTask(id, task);

	res.status(204).json();
};

const getAll = async (req, res) => {
	const [tasks] = await tasksModel.getAll();

	res.json(tasks);
};

module.exports = {
	createTask,
	removeTask,
	updateTask,
	getAll,
};
