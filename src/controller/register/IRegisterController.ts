import { Request, Response, NextFunction } from "express";

export interface IRegisterController {
    register(req: Request, res: Response, next: NextFunction): Promise<void>
}