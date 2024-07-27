import {Request, Response, NextFunction} from 'express';
import { TodoModel } from "../../model/TodoModel";

export interface ITodoController {
    find(req: Request, res: Response, next: NextFunction): Promise<TodoModel[]>
    findById(req: Request,
        res: Response,
        next: NextFunction): Promise<TodoModel>
    create(req: Request,
        res: Response,
        next: NextFunction): Promise<void>
    delete(req: Request,
        res: Response,
        next: NextFunction): Promise<void>
    deleteById(req: Request,
        res: Response,
        next: NextFunction): Promise<void>
}