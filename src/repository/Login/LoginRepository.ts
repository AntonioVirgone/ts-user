import axios, { AxiosRequestConfig } from "axios";
import { TokenModel } from "../../model/TokenModel";
import { UserModel } from "../../model/UserModel";
import { UserEntity } from "../entity/UserEntity";
import { ILoginRepository } from "./ILoginRepository";
import { TS_AUTH_TOKEN } from "../../config/Secrets";
import { TS_AUTH_BASE_PATH } from "../../config/Config";
import { IFindUserRepository } from "../user/find/IFindUserRepository";
import { FindUserRepository } from "../user/find/FindUserRepository";

export class LoginRepository implements ILoginRepository {
  findUserRrpository: IFindUserRepository = new FindUserRepository();

  async findUser(userModel: UserModel): Promise<UserEntity> {
    let user = await this.findUserRrpository.find(
      userModel.username,
      userModel.password
    );

    if (!user) {
      throw new Error("User not found");
    }

    return {
      ...user,
      app: "ts-user",
    };
  }

  async generateToken(userEntity: UserEntity): Promise<TokenModel> {
    try {
      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
          "x-service-token": TS_AUTH_TOKEN,
        },
      };
      const response = await axios.post<TokenModel>(
        TS_AUTH_BASE_PATH,
        userEntity,
        config
      );
      return {
        key: response.data.key,
        userCode: response.data.userCode,
      };
    } catch (error) {
      console.error(error);
      throw new Error(`${error}`);
    }
  }
}
