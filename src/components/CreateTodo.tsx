import React from "react";
import { Todo } from "../shared/types/Todo";
import { uuid } from "../shared/helpers";
import TodoForm from "./TodoForm";

interface CreateTodoProps {
  createTodo: (todo: Todo) => Promise<void>;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ createTodo }) => {
  const onCreateTodoHandler = async (todo: Todo) => {
    if (todo.name && todo.description) {
      await createTodo({
        ...todo,
        id: uuid(),
        createdAt: new Date().toISOString(),
      });
    }
  };

  return <TodoForm onSubmit={onCreateTodoHandler} usedFor="create" />;
};

export default CreateTodo;
