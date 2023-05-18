import { Todo } from "../shared/types/Todo";

export interface TodoInterface {
  todos: Array<Todo>;
  createTodo: (newTodo: Todo) => Promise<void>;
  updateTodo: (updatedTodo: Todo) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  getTodoById: (id: string) => Promise<Todo>;
}

export const defaultTodoContext: TodoInterface = {
  todos: [],
  createTodo: async (newTodo: Todo) => {},
  updateTodo: async (updatedTodo: Todo) => {},
  deleteTodo: async (id: string) => {},
  getTodoById: async (id: string) => {
    return {} as Todo;
  },
};
