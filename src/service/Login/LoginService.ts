import { TokenModel } from "../../model/TokenModel";
import { UserModel } from "../../model/UserModel";
import { LoginRepository } from "../../repository/login/LoginRepository";
import { ILoginService } from "./ILoginService";

export class LoginService implements ILoginService {
  loginRepository = new LoginRepository();

  async login(user: UserModel): Promise<TokenModel> {
    const userEntity = await this.loginRepository.findUser(user);
    return this.loginRepository.generateToken(userEntity);
  }
}
