import { ApiRoutes } from "../api/constants/ApiRoutes";
import { HttpRequestMethods } from "../shared/constants";
import { Todo } from "../shared/types/Todo";

export const loadTodosService = async () => {
  const loadTodosRequest = await fetch(ApiRoutes.TODOS, {
    method: HttpRequestMethods.GET,
  });
  const { todos } = await loadTodosRequest.json();
  return todos as Array<Todo>;
};

export const deleteTodoService = async (id: string) => {
  await fetch(ApiRoutes.TODO.replace(":id", id), {
    method: HttpRequestMethods.DELETE,
  });
};

export const createTodoService = async (todo: Todo) => {
  const todoCreateRequest = await fetch(
    ApiRoutes.TODO.replace(":id", todo.id),
    {
      method: HttpRequestMethods.POST,
      body: JSON.stringify(todo),
    }
  );
  const { todo: newTodo } = await todoCreateRequest.json();
  return newTodo as Todo;
};

export const updateTodoService = async (todo: Todo) => {
  const todoUpdateRequest = await fetch(
    ApiRoutes.TODO.replace(":id", todo.id),
    {
      method: HttpRequestMethods.PATCH,
      body: JSON.stringify(todo),
    }
  );
  const { todo: updatedTodo } = await todoUpdateRequest.json();
  return updatedTodo as Todo;
};

export const getTodoByIdService = async (id: string) => {
  const getTodoRequest = await fetch(ApiRoutes.TODO.replace(":id", id), {
    method: HttpRequestMethods.GET,
  });
  const { todo } = await getTodoRequest.json();
  return todo as Todo;
};
