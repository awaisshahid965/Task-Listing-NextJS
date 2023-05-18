import TodoService from "@/services/TodoService";
import {
  INTERNAL_SERVER_ERROR_RESPONSE,
  SUCCESS_RESPONSE,
} from "@/src/api/constants/response";
import {
  addTodo,
  deleteTodo,
  getTodoById,
  updateTodo,
} from "@/src/api/controller/todos";
import { HttpRequestMethods } from "@/src/shared/constants";
import { Todo } from "@/src/shared/types/Todo";
import { NextApiRequest, NextApiResponse } from "next";

const handleRequestMethod = async (
  requestMethod: string,
  id: string,
  todo: Todo | null
) => {
  switch (requestMethod) {
    case HttpRequestMethods.GET:
      return await getTodoById(id);
    case HttpRequestMethods.POST:
      return await addTodo(todo as Todo);
    case HttpRequestMethods.DELETE:
      return await deleteTodo(id);
    case HttpRequestMethods.PATCH:
      return await updateTodo(todo as Todo);
    default:
      throw Error("");
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body = null, query } = req;
  const id = query?.id?.toString() ?? "";
  const receivedTodoObj = body ? JSON.parse(body) : {};
  try {
    const todo = await handleRequestMethod(
      method ?? "",
      id,
      receivedTodoObj as Todo
    );
    res.status(SUCCESS_RESPONSE.status).json({
      message: SUCCESS_RESPONSE.message,
      todo,
    });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR_RESPONSE.status).json({
      message: INTERNAL_SERVER_ERROR_RESPONSE.message,
      todo: null,
    });
  }
}
