const connection = require("./connection");

const createTask = async (task) => {
	const { title } = task;
	const dateUTC = new Date(Date.now()).toUTCString();
	const [createdTask] = await connection.execute(
		"insert into tasks (title, status, created_at) values (?, ?, ?)",
		[title, "Por realizar", dateUTC]
	);
	return createdTask;
};

const removeTask = async (id) => {
	await connection.execute("delete from tasks where id = ?", [id]);
};

const updateTask = async (id, task) => {
	const { title, status } = task;
	const [updatedTask] = await connection.execute(
		"update tasks set title = ?, status = ? where id = ?",
		[title, status, id]
	);
	return updatedTask;
};

const getAll = async () => {
	const tasks = await connection.execute("select * from tasks");
	return tasks;
};

module.exports = {
	createTask,
	removeTask,
	updateTask,
	getAll,
};
