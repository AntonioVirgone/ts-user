import { TokenModel } from "../../model/TokenModel";
import { UserModel } from "../../model/UserModel";
import { LoginService } from "../../service/login/LoginService";
import { ILoginController } from "./ILoginController";

export class LoginController implements ILoginController {
  loginService = new LoginService();

  async login(user: UserModel): Promise<TokenModel> {
    return await this.loginService.login(user);
  }
}
