export class ToDo {
    description: string;
    done: boolean;
  
    constructor(description: string) {
      this.description = description;
      this.done = false;
    }
  
    complete(): void {
      this.done = true;
    }
  }