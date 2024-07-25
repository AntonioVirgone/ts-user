import { TokenModel } from "../../model/TokenModel";
import { UserModel } from "../../model/UserModel";
import { UserEntity } from "../entity/UserEntity";
import { ILoginRepository } from "./ILoginRepository";

export class LoginRepository implements ILoginRepository {
  async findUser(user: UserModel): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }

  async generateToken(userEntity: UserEntity): Promise<TokenModel> {
    throw new Error("Method not implemented.");
  }
}
