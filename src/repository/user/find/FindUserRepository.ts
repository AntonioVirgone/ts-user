import { NullableUserEntity } from "../../entity/UserEntity";
import { IFindUserRepository } from "./IFindUserRepository";
import { PrismaClient } from "@prisma/client";

export class FindUserRepository implements IFindUserRepository {
  async find(username: string, password: string): Promise<NullableUserEntity> {
    const prisma = new PrismaClient();

    const userEntity = await prisma.user.findFirst({
      where: {
        username: username,
        password: password,
      },
    });

    return userEntity;
  }
}
