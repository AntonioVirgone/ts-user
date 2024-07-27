import { Request, Response, NextFunction } from "express";
import { TodoModel } from "../../model/TodoModel";
import { ITodoController } from "./ITodoController";
import { Auth } from "../../decorator/Auth";
import { TodoService } from "../../service/todo/TodoService";
import { ITodoService } from "../../service/todo/ITodoService";

export class TodoController implements ITodoController {
  todoService: ITodoService = new TodoService();

  @Auth
  async find(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<TodoModel[]> {
    const authToken = req.headers["app-token"] as string;
    const userCode = req.query["userCode"] as string;

    console.log(`userCode: ${userCode}`);
    console.log(`auth ${authToken}`);
    
    return await this.todoService.find(authToken, userCode);
  }

  findById(userCode: string, todoId: string): Promise<TodoModel> {
    throw new Error("Method not implemented.");
  }

  create(userCode: string, todoModel: TodoModel): Promise<void> {
    throw new Error("Method not implemented.");
  }

  delete(userCode: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  deleteById(userCode: string, todoId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
