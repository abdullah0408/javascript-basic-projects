document.addEventListener("DOMContentLoaded", () => {
    let todoInput = document.getElementById("todo-input");
    let addTaskButton = document.getElementById("add-task-btn");
    let todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) => renderTask(task));

    // Function to add a task
    function addTask() {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        };

        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        todoInput.value = "";
        console.log(tasks);
    }

    // Add task button click event
    addTaskButton.addEventListener("click", addTask);

    // Add keydown event to the input field to allow adding tasks with Enter key
    todoInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });

    function renderTask(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        if(task.completed)  li.classList.add("completed")
        li.innerHTML = `
            <span>${task.text}</span>
            <button>Delete</button>
        `;
        li.addEventListener("click", (e) => {
            if(e.target.tagName === "BUTTON") return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTasks();
        });

        li.querySelector("button").addEventListener("click", (e) => {
            e.stopPropagation();
            tasks = tasks.filter((t) => t.id !== task.id);
            li.remove();
            saveTasks();
        })
        todoList.prepend(li);
    };

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
})
