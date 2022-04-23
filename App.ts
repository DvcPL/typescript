import { ToDoRepository } from "./ToDoRepository";

const repo = new ToDoRepository();

const addButton: HTMLElement | null = document.getElementById("todo-sub");
const inputElement: HTMLElement | null = document.getElementById("todo-desc");
const todoList: HTMLElement | null = document.getElementById("todo-list");

if (addButton !== null && inputElement !== null && todoList !== null) {
  addButton.addEventListener("click", (e: Event) => {
    if (inputElement instanceof HTMLInputElement) {
      e.preventDefault();
      const newItem: HTMLElement = document.createElement("li");
      repo.addToDo(inputElement.value);

      todoList.appendChild(newItem);
    }
  });
}