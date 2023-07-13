const { homeController, userController, createTaskController } = require('../controller/appController');

const router = require('express').Router();

router.get('/home', homeController);
router.get('/user/:id/tasks', userController);
router.get('/user/:id/createTask', createTaskController)

module.exports = router;