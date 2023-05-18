import {
  INTERNAL_SERVER_ERROR_RESPONSE,
  SUCCESS_RESPONSE,
} from "@/src/api/constants/response";
import { getTodos } from "@/src/api/controller/todos";
import { HttpRequestMethods } from "@/src/shared/constants";
import { Todo } from "@/src/shared/types/Todo";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  try {
    if (method !== HttpRequestMethods.GET) {
      throw new Error("");
    }
    const todos = await getTodos();
    res.status(SUCCESS_RESPONSE.status).json({
      message: SUCCESS_RESPONSE.message,
      todos,
    });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR_RESPONSE.status).json({
      message: INTERNAL_SERVER_ERROR_RESPONSE.message,
      todos: [] as Array<Todo>,
    });
  }
}
