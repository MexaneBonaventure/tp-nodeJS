const form = document.getElementById('taskForm');

form.onsubmit = (event) => {
    event.preventDefault();
    fetch(`/api/user/${form.userId.value}/task`, {
        method:'post',
        body: JSON.stringify({
            content: form.task.value,
            isUrgent: form.category.value == 'urgent',
        }),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
        .then(() => {
            window.location.href= `/user/${form.userId.value}/tasks`;
        })
        .catch(error => {
            throw new Error(error);
        })
}