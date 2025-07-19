

function changeText(){
    const textElement = document.getElementById("greeting");
    textElement.innerHTML = "Chào mừng bạn đến với bài tập DOM!";
}

function changeColor() {
    const boxElement = document.getElementById("box");
    boxElement.style.backgroundColor = "orange";
}

function addTodoList() {
    const inputElement = document.getElementById("todoInput");
    const todoListElement = document.getElementById("todoList");

    if (inputElement.value.trim() === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    const newTodoItem = document.createElement("li");
    newTodoItem.innerHTML = `<span>${inputElement.value}</span> <button onclick="removeTodo(this)">Xóa</button>`;
    todoListElement.appendChild(newTodoItem);
    inputElement.value = "";
}

function removeTodo(button) {
    const todoItem = button.parentElement;
    todoItem.remove();
}
function changeImage() {
    const imageElement = document.getElementById("myImage");
    imageElement.src = "https://upload.wikimedia.org/wikipedia/commons/0/00/Logo_UIT_updated.svg";
}

function toggleHighlight() {
    const textElement = document.getElementById("toggleClassText");
    textElement.classList.toggle("highlight");
}