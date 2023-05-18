import UpdateTodo from "@/src/components/UpdateTodo";
import { useTodoContext } from "@/src/context/TodoContext";
import { Todo } from "@/src/shared/types/Todo";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UpdateTodoPage = () => {
  const [todo, setTodo] = useState<Todo>();
  const router = useRouter();
  const { getTodoById, updateTodo } = useTodoContext();

  const loadTodoById = async (id: string) => {
    const todo = await getTodoById(id);
    setTodo(todo);
  };

  useEffect(() => {
    const id = router.query?.id?.toString() ?? "";
    if (router.isReady) {
      loadTodoById(id);
    }
  }, [router]);

  if (!todo) {
    return <>Loading...</>;
  }

  return <UpdateTodo todo={todo} updateTodo={updateTodo} />;
};

export default UpdateTodoPage;
