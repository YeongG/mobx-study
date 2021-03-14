import { observable } from "mobx";

export interface TodoData {
  id: number;
  content: string;
}

interface TodoStore {
  todos: TodoData[];
  currentId: number;
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
}

export const todo = observable<TodoStore>({
  todos: [],
  currentId: 0,
  addTodo(content: string) {
    this.todos.push({ id: this.currentId++, content });
  },
  removeTodo(targetId: number) {
    const index = this.todos.findIndex(({ id }) => id === targetId);
    if (targetId !== -1) {
      this.todos.splice(index, 1);
    }
  },
});
