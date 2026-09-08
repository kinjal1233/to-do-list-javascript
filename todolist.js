document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');

    newTask.innerHTML = `${taskText} <button class="deleteBtn">del</button>`;
    
    taskList.insertBefore(newTask, taskList.firstChild);
    taskInput.value = '';
});

document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.classList.contains('deleteBtn')) {
        const taskItem = e.target.parentElement;
        taskItem.remove();
    }
});
