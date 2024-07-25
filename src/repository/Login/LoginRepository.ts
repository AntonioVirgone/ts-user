import { TokenModel } from "../../model/TokenModel";
import { UserModel } from "../../model/UserModel";
import { UserEntity } from "../entity/UserEntity";
import { ILoginRepository } from "./ILoginRepository";
import { PrismaClient } from "@prisma/client";

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
      appName: "ts-user",
    };

    return userEntity;
  }

  async generateToken(userEntity: UserEntity): Promise<TokenModel> {
    console.log("token generated");
    return {
      token: "abcwerr",
      userCode: userEntity.userCode,
    };
  }
}
