import { Todo as TodoType } from "@/src/shared/types/Todo";
import HttpClient from "./HttpClient";

enum TodoEndpoints {
  FETCH_TODOS = "/todos",
  FETCH_TODO = "/todos/:id",
  CREATE_TODO = "/todos",
  UPDATE_TODO = "/todos/:id",
  DELETE_TODO = "/todos/:id",
}

class TodoService extends HttpClient {
  static async fetchTodos() {
    const todos = await this.get(TodoEndpoints.FETCH_TODOS);
    return todos;
  }

  static async fetchTodoById(id: string) {
    const todoByIdPath = TodoEndpoints.FETCH_TODO.replace(":id", id);
    const todo = await this.get(todoByIdPath);
    return todo;
  }

  static async createTodo(newTodo: TodoType) {
    const todo = await this.post(TodoEndpoints.CREATE_TODO, {
      ...newTodo,
    });
    return todo;
  }

  static async deleteTodo(id: string) {
    const delTodoByIdPath = TodoEndpoints.DELETE_TODO.replace(":id", id);
    const todo = await this.delete(delTodoByIdPath);
    return todo;
  }

  static async updateTodo(updatedTodo: TodoType) {
    const updateTodoByIdPath = TodoEndpoints.UPDATE_TODO.replace(
      ":id",
      updatedTodo.id
    );
    const todo = await this.patch(updateTodoByIdPath, {
      ...updatedTodo,
    });
    return todo;
  }
}

export default TodoService;
