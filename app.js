// Simple vanilla JS task tracker — no frameworks, no build step.

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

let tasks = [];

function render() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("click", () => toggleTask(index));

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", () => removeTask(index));

    li.appendChild(span);
    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

function addTask(text) {
  tasks.push({ text, done: false });
  render();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  render();
}

function removeTask(index) {
  tasks.splice(index, 1);
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (value) {
    addTask(value);
    input.value = "";
    input.focus();
  }
});

// Seed with a couple of example tasks
addTask("Write the Dockerfile");
addTask("Build and run the container");
