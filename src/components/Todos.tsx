import { Todo as TodoType } from "@/src/shared/types/Todo";
import React from "react";
import Todo from "./Todo";

interface TodosProps {
  todos: Array<TodoType>;
}

const Todos: React.FC<TodosProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo {...todo} key={todo.id} />;
      })}
    </div>
  );
};

export default Todos;
