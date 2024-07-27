import { generateRandomString } from "ts-av-common";
import { UserModel } from "../../model/UserModel";
import { NullableUserEntity } from "../../repository/entity/UserEntity";
import { IRegisterRepository } from "../../repository/register/IRegisterRepository";
import { RegisterRepository } from "../../repository/register/RegisterRepository";
import { IRegisterService } from "./IRegisterService";
import { ITodoRepository } from "../../repository/todo/ITodoRepository";
import { TodoRepository } from "../../repository/todo/TodoRepository";
import { IFindUserRepository } from "../../repository/user/find/IFindUserRepository";
import { FindUserRepository } from "../../repository/user/find/FindUserRepository";

export class RegisterService implements IRegisterService {
  findUserRepository: IFindUserRepository = new FindUserRepository();
  registerRepository: IRegisterRepository = new RegisterRepository();
  todoRepository: ITodoRepository = new TodoRepository();

  async register(user: UserModel): Promise<void> {
    // check if exist user
    let userEntity: NullableUserEntity = await this.findUserRepository.find(
      user.username,
      user.password
    );

    if (userEntity) {
      return;
    }

    // generate userCode
    userEntity = {
      username: user.username,
      password: user.password,
      userCode: generateRandomString(12),
      role: "ADMIN",
    };

    try {
      await this.registerRepository.register(userEntity);

      // send todo-api to create new todo-list
      return await this.todoRepository.createList(userEntity.userCode);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
