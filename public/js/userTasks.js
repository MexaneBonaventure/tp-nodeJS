const doneForms = document.getElementsByClassName('isDoneForm');
const deleteTask = document.getElementsByClassName('deleteTask');

for (let form of doneForms) {
    form.onsubmit = (event) => {
        event.preventDefault();
        const userId = form.userId.value;
        const taskId = form.taskId.value;
        fetch(`/api/user/${userId}/task/${taskId}`, {method: 'put'})
            .then(() => {
            location.reload();
            })
            .catch(error => {
            throw new Error(error);
            })
    }
}

for (let form of deleteTask) {
    form.onsubmit = (event) => {
        event.preventDefault();
        const taskId = form.taskId.value;
        fetch(`/api/task/${taskId}`, {method: 'delete'})
            .then(() => {
                location.reload();
            })
            .catch(error => {
                throw new Error(error);
            })
    }
}