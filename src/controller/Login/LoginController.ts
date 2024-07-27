import { Auth } from "../../decorator/Auth";
import { TokenModel } from "../../model/TokenModel";
import { Request, Response, NextFunction } from "express";
import { ILoginService } from "../../service/login/ILoginService";
import { LoginService } from "../../service/login/LoginService";
import { ILoginController } from "./ILoginController";
import { UserModel } from "../../model/UserModel";

export class LoginController implements ILoginController {
  loginService: ILoginService = new LoginService();

  @Auth
  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<TokenModel> {
    const user: UserModel = req.body;
    return await this.loginService.login(user);
  }
}
