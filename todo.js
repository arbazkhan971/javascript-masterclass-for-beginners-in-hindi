document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage when the page loads
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        tasks.push(taskText);
        updateLocalStorage();
        taskInput.value = '';
        displayTasks();
    }

    function removeTask(index) {
        tasks.splice(index, 1);
        updateLocalStorage();
        displayTasks();
    }

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${task}
                <button onclick="removeTask(${index})">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }

    addTaskButton.addEventListener('click', addTask);
    displayTasks();
});
