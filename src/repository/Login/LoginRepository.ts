import axios from "axios";
import { PrismaClient } from "@prisma/client";
import { TokenModel } from "../../model/TokenModel";
import { UserModel } from "../../model/UserModel";
import { UserEntity } from "../entity/UserEntity";
import { ILoginRepository } from "./ILoginRepository";

export class LoginRepository implements ILoginRepository {
  prisma = new PrismaClient();

  async findUser(userModel: UserModel): Promise<UserEntity> {
    const user = await this.prisma.user.findFirst({
      where: {
        AND: [
          { username: userModel.username },
          { password: userModel.password },
        ],
      },
    });

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
    const response = await axios.post<TokenModel>('http://localhost:3020/', userEntity);
    console.log(response.data);
    
    return {
      key: response.data.key,
      userCode: response.data.userCode,
    };
  }
}
