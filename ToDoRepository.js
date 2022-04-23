"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoRepository = void 0;
const ToDo_1 = require("./ToDo");
class ToDoRepository {
    constructor() {
        this.todos = [];
        this.addToDo = (description, uiNode) => {
            console.log(`Added ${description} to ${JSON.stringify(this.todos)}`);
            const toDo = new ToDo_1.ToDo(description);
            this.todos.push(toDo);
        };
    }
}
exports.ToDoRepository = ToDoRepository;
