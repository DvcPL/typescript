"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToDoRepository_1 = require("./ToDoRepository");
const repo = new ToDoRepository_1.ToDoRepository();
const addButton = document.getElementById("todo-sub");
const inputElement = document.getElementById("todo-desc");
const todoList = document.getElementById("todo-list");
if (addButton !== null && inputElement !== null && todoList !== null) {
    addButton.addEventListener("click", (e) => {
        if (inputElement instanceof HTMLInputElement) {
            e.preventDefault();
            const newItem = document.createElement("li");
            repo.addToDo(inputElement.value);
            todoList.appendChild(newItem);
        }
    });
}
