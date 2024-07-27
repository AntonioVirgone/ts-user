import { TodoModel } from "../../model/TodoModel";

export interface ITodoService {
  find(authToken: string, userCode: string): Promise<TodoModel[]>;
  findById(
    authToken: string,
    userCode: string,
    todoId: string
  ): Promise<TodoModel>;
  create(
    authToken: string,
    userCode: string,
    todoModel: TodoModel
  ): Promise<void>;
  delete(authToken: string, userCode: string): Promise<void>;
  deleteById(
    authToken: string,
    userCode: string,
    todoId: string
  ): Promise<void>;
}
