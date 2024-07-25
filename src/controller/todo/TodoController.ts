import { TodoModel } from "../../model/TodoModel";
import { ITodoController } from "./ITodoController";

export class TodoController implements ITodoController {
  find(userCode: string, token: string): Promise<TodoModel[]> {
    throw new Error("Method not implemented.");
  }
  
  findById(
    userCode: string,
    token: string,
    todoId: string
  ): Promise<TodoModel> {
    throw new Error("Method not implemented.");
  }

  create(userCode: string, token: string, todoModel: TodoModel): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  delete(userCode: string, token: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  deleteById(userCode: string, token: string, todoId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
