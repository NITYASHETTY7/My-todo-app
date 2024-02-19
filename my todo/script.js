function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            taskList.appendChild(li);
        } else {
            taskList.insertBefore(li, taskList.firstChild);
        }
    });
    var span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";
    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.insertBefore(li, taskList.firstChild);

    taskInput.value = "";
}

document.getElementById("taskInput").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});
