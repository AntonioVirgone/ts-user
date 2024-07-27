import axios, { AxiosRequestConfig } from "axios";
import { PrismaClient } from "@prisma/client";
import { TokenModel } from "../../model/TokenModel";
import { UserModel } from "../../model/UserModel";
import { UserEntity } from "../entity/UserEntity";
import { ILoginRepository } from "./ILoginRepository";
import { TS_AUTH_TOKEN } from "../../config/Secrets";
import { TS_AUTH_BASE_PATH } from "../../config/Config";

export class LoginRepository implements ILoginRepository {
  prisma = new PrismaClient();

  async findUser(userModel: UserModel): Promise<UserEntity> {
    console.log(`${JSON.stringify(userModel)}`);


    const user = await this.prisma.user.findFirst({
      where: {
        username: userModel.username,
        password: userModel.password,
      },
    });

    console.log(user);

    if (!user) {
      throw new Error("User not found");
    }

    const userEntity: UserEntity = {
      userCode: user!.userCode,
      role: user!.role,
      app: "ts-user",
    };

    return userEntity;
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
