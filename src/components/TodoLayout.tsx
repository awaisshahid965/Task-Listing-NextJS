import React from "react";
import Todos from "./Todos";
import CreateTodo from "./CreateTodo";
import { useTodoContext } from "../context/TodoContext";

const TodoLayout = () => {
  const { todos, createTodo } = useTodoContext();
  return (
    <>
      <CreateTodo createTodo={createTodo} />
      <Todos todos={todos} />
    </>
  );
};

export default TodoLayout;
