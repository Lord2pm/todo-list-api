const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");
const taskMiddleware = require("../middlewares/tasksMiddleware");

router.get("/tasks", tasksController.getAll);
router.post(
	"/tasks",
	taskMiddleware.validateFieldTitle,
	tasksController.createTask
);
router.delete("/tasks/:id", tasksController.removeTask);
router.put(
	"/tasks/:id",
	taskMiddleware.validateFieldTitle,
	taskMiddleware.validateFieldStatus,
	tasksController.updateTask
);

module.exports = router;
