import {Request, Response, NextFunction} from 'express';
import { TodoModel } from "../../model/TodoModel";

export interface ITodoController {
    find(req: Request, res: Response, next: NextFunction): Promise<TodoModel[]>
    findById(userCode: string, todoId: string): Promise<TodoModel>
    create(userCode: string, todoModel: TodoModel): Promise<void>
    delete(userCode: string): Promise<void>
    deleteById(userCode: string, todoId: string): Promise<void>
}