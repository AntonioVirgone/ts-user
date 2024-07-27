import { UserEntity } from "../entity/UserEntity";
import { IRegisterRepository } from "./IRegisterRepository";
import { PrismaClient } from "@prisma/client";

export class RegisterRepository implements IRegisterRepository {
  async register(userEntity: UserEntity): Promise<UserEntity> {
    try {
      const prisma = new PrismaClient();
      const newUser: UserEntity = await prisma.user.create({
        data: {
          username: userEntity.username,
          password: userEntity.password!,
          userCode: userEntity.userCode,
          role: userEntity.role,
        },
      });
      return newUser;
    } catch (error) {
      throw new Error(`Create user failed. Error: ${error}`);
    }
  }
}
