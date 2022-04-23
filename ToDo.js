"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDo = void 0;
class ToDo {
    constructor(description) {
        this.description = description;
        this.done = false;
    }
    complete() {
        this.done = true;
    }
}
exports.ToDo = ToDo;
