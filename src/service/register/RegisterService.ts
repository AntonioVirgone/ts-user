import { generateRandomString } from "ts-av-common";
import { UserModel } from "../../model/UserModel";
import { UserEntity } from "../../repository/entity/UserEntity";
import { IRegisterRepository } from "../../repository/register/IRegisterRepository";
import { RegisterRepository } from "../../repository/register/RegisterRepository";
import { IRegisterService } from "./IRegisterService";
import { ITodoRepository } from "../../repository/todo/ITodoRepository";
import { TodoRepository } from "../../repository/todo/TodoRepository";
import { ILoginRepository } from "../../repository/login/ILoginRepository";
import { LoginRepository } from "../../repository/login/LoginRepository";

export class RegisterService implements IRegisterService {
  loginRepository: ILoginRepository = new LoginRepository();
  registerRepository: IRegisterRepository = new RegisterRepository();
  todoRepository: ITodoRepository = new TodoRepository();

  async register(user: UserModel): Promise<void> {
    try {
      // check if exist user
      // this.loginRepository.findUser(user);

      // generate userCode
      const userEntity: UserEntity = {
        username: user.username,
        password: user.password,
        userCode: generateRandomString(12),
        role: "ADMIN",
      };

      console.log(`Create new user ${JSON.stringify(userEntity)}`);
      
      const newUser: UserEntity = await this.registerRepository.register(userEntity);
      console.log(`${JSON.stringify(newUser)}`);
      

      // send todo-api to create new todo-list
      this.todoRepository.createList(newUser.userCode);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
