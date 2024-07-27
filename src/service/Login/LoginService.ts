import { TokenModel } from "../../model/TokenModel";
import { UserModel } from "../../model/UserModel";
import { ILoginRepository } from "../../repository/login/ILoginRepository";
import { LoginRepository } from "../../repository/login/LoginRepository";
import { isUserValid } from "../predicate/ValidUserPredicate";
import { ILoginService } from "./ILoginService";

export class LoginService implements ILoginService {
  loginRepository: ILoginRepository = new LoginRepository();

  async login(user: UserModel): Promise<TokenModel> {
    if (isUserValid(user)) {
      const userEntity = await this.loginRepository.findUser(user);
      return this.loginRepository.generateToken(userEntity);
    }
    throw new Error("User is required");
  }
}
