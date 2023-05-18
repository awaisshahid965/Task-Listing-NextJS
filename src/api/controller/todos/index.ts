import TodoService from "@/services/TodoService";
import { Todo as TodoType } from "@/src/shared/types/Todo";

export const getTodos = async () => {
  const todos = await TodoService.fetchTodos();
  return todos;
};

export const getTodoById = async (id: string) => {
  const todo = await TodoService.fetchTodoById(id);
  return todo;
};

export const addTodo = async (newTodo: TodoType) => {
  const todo = await TodoService.createTodo(newTodo);
  return todo;
};

export const deleteTodo = async (id: string) => {
  const todo = await TodoService.deleteTodo(id);
  return todo;
};

export const updateTodo = async (updatedTodo: TodoType) => {
  const todo = await TodoService.updateTodo(updatedTodo);
  return todo;
};
