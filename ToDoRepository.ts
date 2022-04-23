import { ToDo } from "./ToDo";

export class ToDoRepository {
  private todos: ToDo[] = [];

  public addToDo = (description: string, uiNode: HTMLElement): void => {
    console.log(`Added ${description} to ${JSON.stringify(this.todos)}`);
    const toDo = new ToDo(description);
    this.todos.push(toDo);
  };
}