import { TokenModel } from "../../model/TokenModel";
import { Request, Response, NextFunction } from "express";

export interface ILoginController {
  login(req: Request, res: Response, next: NextFunction): Promise<TokenModel>;
}
