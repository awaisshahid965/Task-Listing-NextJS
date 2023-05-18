import { Todo as TodoType } from "@/src/shared/types/Todo";
import React from "react";
import { useTodoContext } from "../context/TodoContext";
import { useRouter } from "next/router";

const Todo: React.FC<TodoType> = ({ id, name, description }) => {
  const { deleteTodo } = useTodoContext();
  const router = useRouter();

  const deleteTodoHandler = async () => {
    await deleteTodo(id);
  };

  return (
    <div>
      <p>name: {name}</p>
      <p>description: {description}</p>
      <button onClick={() => router.push("/todo/update/" + id)}>
        update todo
      </button>
      <span>&nbsp;</span>
      <button onClick={deleteTodoHandler}>delete todo</button>
      <hr />
    </div>
  );
};

export default Todo;
