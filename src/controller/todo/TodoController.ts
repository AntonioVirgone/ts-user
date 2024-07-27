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
    const userCode = req.query["user_code"] as string;

    return await this.todoService.find(authToken, userCode);
  }

  @Auth
  async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<TodoModel> {
    const authToken = req.headers["app-token"] as string;
    const userCode = req.query["user_code"] as string;

    // userCode, todoItemId
    throw new Error("Method not implemented.");
  }

  @Auth
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const authToken: string = req.headers["app-token"] as string;
    const userCode: string = req.query["user_code"] as string;
    const todoModel: TodoModel = req.body;

    return await this.todoService.create(authToken, userCode, todoModel);
  }

  @Auth
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const authToken = req.headers["app-token"] as string;
    const userCode = req.query["user_code"] as string;

    return await this.todoService.delete(authToken, userCode);
  }

  @Auth
  async deleteById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const authToken: string = req.headers["app-token"] as string;
    const userCode: string = req.query["user_code"] as string;
    const { todoItemId } = req.params;

    return await this.todoService.deleteById(authToken, userCode, todoItemId);
  }
}
