import React, { FC, useEffect, useState } from "react";
import { TodoProvider } from "./TodoContext";
import { TodoInterface, defaultTodoContext } from "./TodoInterface";
import { Todo } from "../shared/types/Todo";
import {
  createTodoService,
  deleteTodoService,
  getTodoByIdService,
  loadTodosService,
  updateTodoService,
} from "./TodoService";

interface TodoContextContainerProps {
  children: React.ReactNode;
}

const TodoContainer: FC<TodoContextContainerProps> = ({ children }) => {
  const [state, setState] = useState<TodoInterface>(defaultTodoContext);

  async function loadAllTodos() {
    const todos = await loadTodosService();
    setState((prev) => ({
      ...prev,
      todos: [...todos],
    }));
  }

  useEffect(() => {
    loadAllTodos();
  }, []);

  const createTodo = async (newTodo: Todo) => {
    const todo = await createTodoService(newTodo);
    setState((prev) => ({
      ...prev,
      todos: [...prev.todos, todo],
    }));
  };

  const deleteTodo = async (id: string) => {
    await deleteTodoService(id);
    const filteredTodos = state.todos.filter((todo) => todo.id !== id);
    setState((prev) => ({
      ...prev,
      todos: [...filteredTodos],
    }));
  };

  const getTodoById = async (id: string) => {
    const todo = await getTodoByIdService(id);
    return todo;
  };

  const updateTodo = async (updatedTodo: Todo) => {
    const todo = await updateTodoService(updatedTodo);
    const updatedTodoList = state.todos;
    const updatedTodoIndex = updatedTodoList.findIndex((u) => u.id === todo.id);
    updatedTodoList[updatedTodoIndex] = todo;
    setState((prev) => ({
      ...prev,
      todos: [...updatedTodoList],
    }));
  };

  return (
    <TodoProvider
      value={{
        ...state,
        createTodo,
        deleteTodo,
        getTodoById,
        updateTodo,
      }}
    >
      {children}
    </TodoProvider>
  );
};

export default TodoContainer;
