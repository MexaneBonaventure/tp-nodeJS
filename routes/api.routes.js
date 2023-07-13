const { updateTaskController, deleteTaskController, apiCreateTaskController } = require('../controller/apiController');

const router = require('express').Router();

router.put('/api/user/:userId/task/:taskId', updateTaskController);
router.delete('/api/task/:id', deleteTaskController);
router.post('/api/user/:id/task', apiCreateTaskController);

module.exports = router;