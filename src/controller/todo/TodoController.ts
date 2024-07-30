import { Request, Response, NextFunction } from "express";
import { TodoModel } from "../../model/TodoModel";
import { ITodoController } from "./ITodoController";
import { Auth } from "../../decorator/Auth";
import { TodoService } from "../../service/todo/TodoService";
import { ITodoService } from "../../service/todo/ITodoService";

interface Item extends TodoModel {
  id: number;
  name: string;
}

let items: Item[] = [
  { id: 1, name: 'Item 1', itemId: "1", title: "", status: "", description: "", createdAt: new Date() },
  { id: 2, name: 'Item 1', itemId: "1", title: "", status: "", description: "", createdAt: new Date() },
  { id: 3, name: 'Item 1', itemId: "1", title: "", status: "", description: "", createdAt: new Date() },
];

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
    const { todoItemId } = req.params;
    console.log(`todo id ${todoItemId}`);
    
    return this.todoService.findById(authToken, userCode, todoItemId);
  }

  @Auth
  async create(req: Request, res: Response, next: NextFunction): Promise<TodoModel> {
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

  @Auth
  async changeStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const authToken: string = req.headers["app-token"] as string;
    const userCode: string = req.query["user_code"] as string;
    const { todoItemId, status } = req.params;

    console.log(`change status item with id ${todoItemId} in ${status}`);
    
    await this.todoService.changeStatus(
      authToken,
      userCode,
      todoItemId,
      status
    );
  }
}
