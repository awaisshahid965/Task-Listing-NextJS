import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Todo } from "../shared/types/Todo";

interface TodoFormProps {
  todo?: Todo;
  onSubmit: (todo: Todo) => Promise<void>;
  usedFor: "create" | "update";
}

const defaultTodo: Todo = {
  id: "",
  name: "",
  description: "",
  createdAt: "",
};

const TodoForm: FC<TodoFormProps> = ({
  todo = defaultTodo,
  onSubmit,
  usedFor,
}) => {
  const [todoState, setTodoState] = useState(todo);

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value) {
      setTodoState((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(todoState);
    resetTodoStateAfterCreation();
  };

  const resetTodoStateAfterCreation = () => {
    if (usedFor === "create") {
      setTodoState(defaultTodo);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      Enter Name:{" "}
      <input
        type="text"
        name="name"
        value={todoState.name}
        onChange={onChangeInputHandler}
      />
      <br />
      Enter description:{" "}
      <input
        type="text"
        name="description"
        value={todoState.description}
        onChange={onChangeInputHandler}
      />
      <br />
      <button>{usedFor} todo</button>
      <br />
      <br />
      <hr />
      <br />
      <br />
    </form>
  );
};

export default TodoForm;
