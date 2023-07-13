const { tasks } = require('../db/tasks.json');
const { writeFileSync } = require('fs');
const { randomUUID } = require('crypto');
const { resolve } = require('path');


exports.updateTaskController = ((request, response) => {
    let taskId = request.params.taskId;
    let task = findTask(taskId);
    task.isDone ? task.isDone = false : task.isDone = true;
    updateJSON();
    response.end();
})

exports.deleteTaskController = ((request, response) => {
    const taskId = request.params.id
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == taskId) {
            tasks.splice(i,1);
        }
    }
    updateJSON();
    response.end();
})

exports.apiCreateTaskController = ((request, response) => {
    const userId = request.params.id;
    const newTask = {
        id: randomUUID(),
        userId,
        content: request.body.content,
        isDone: false,
        isUrgent: request.body.isUrgent,
    }
    tasks.push(newTask);
    updateJSON();
    response.end();
})

function updateJSON() {
    writeFileSync(
        resolve('db', 'tasks.json'),
        JSON.stringify({ tasks }, null, 2)
    );
}

function findTask(taskId) {
    return tasks.find(task => taskId == task.id);
}