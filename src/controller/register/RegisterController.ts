import { Request, Response, NextFunction } from "express";
import { Auth } from "../../decorator/Auth";
import { UserModel } from "../../model/UserModel";
import { IRegisterController } from "./IRegisterController";
import { IRegisterService } from "../../service/register/IRegisterService";
import { RegisterService } from "../../service/register/RegisterService";

export class RegisterController implements IRegisterController {
  registerService: IRegisterService = new RegisterService();

  @Auth
  async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const user: UserModel = req.body;
    this.registerService.register(user);
  }
}
