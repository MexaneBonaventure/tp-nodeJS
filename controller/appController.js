const { users } = require('../db/users.json');
const { tasks } = require('../db/tasks.json');

exports.homeController = ((request, response) => {
    response.render('home', {users})
})

exports.userController = ((request, response) => {
    let userId = request.params.id;
    let user = users.find(user => user.id == userId)
    let userTasks = [];
    
    tasks.forEach(task => {
        if (task.userId == userId) {
            userTasks.push(task);
        }
    });
    user ? 
        response.render('userTasks', { user, userTasks }) :
        response.status(404).end();
})

exports.createTaskController = ((request, response) => {
    response.render('taskForm', {userId: request.params.id});
})
