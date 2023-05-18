import React, { useContext } from "react";
import { TodoInterface, defaultTodoContext } from "./TodoInterface";

export const TodoContext =
  React.createContext<TodoInterface>(defaultTodoContext);
export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => useContext(TodoContext);
