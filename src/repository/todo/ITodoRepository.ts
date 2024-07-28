import { TodoModel } from "../../model/TodoModel";
import { TodoStatus } from "../../model/TodoStatus";

export interface ITodoRepository {
  find(userCode: string): Promise<TodoModel[]>;
  findById(userCode: string, todoId: string): Promise<TodoModel>;
  createList(userCode: string): Promise<void>;
  create(userCode: string, todoModel: TodoModel): Promise<void>;
  delete(userCode: string): Promise<void>;
  deleteById(userCode: string, todoId: string): Promise<void>;
  changeStatus(userCode: string, todoId: string, status: TodoStatus): Promise<void>;
}
