import React from "react";
import { Todo } from "../shared/types/Todo";
import TodoForm from "./TodoForm";
import { useRouter } from "next/router";

interface UpdateTodoProps {
  todo: Todo;
  updateTodo: (todo: Todo) => Promise<void>;
}

const UpdateTodo: React.FC<UpdateTodoProps> = ({ todo, updateTodo }) => {
  const router = useRouter();
  const onUpdateTodoHandler = async (updatedTodo: Todo) => {
    if (updatedTodo.name && updatedTodo.description) {
      await updateTodo(updatedTodo);
      router.push("/");
    }
  };

  return (
    <TodoForm todo={todo} onSubmit={onUpdateTodoHandler} usedFor="update" />
  );
};

export default UpdateTodo;
