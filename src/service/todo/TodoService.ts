import { TodoModel } from "../../model/TodoModel";
import { ITodoRepository } from "../../repository/todo/ITodoRepository";
import { TodoRepository } from "../../repository/todo/TodoRepository";
import { IVerifyTokenRepository } from "../../repository/verifyToken/IVerifyTokenRepository";
import { VerifyTokenRepository } from "../../repository/verifyToken/VerifyTokenRepository";
import { ITodoService } from "./ITodoService";

export class TodoService implements ITodoService {
  verifyTokenRepository: IVerifyTokenRepository = new VerifyTokenRepository();
  todoRepository: ITodoRepository = new TodoRepository();

  async find(authToken: string, userCode: string): Promise<TodoModel[]> {
    return await this.verifyTokenRepository
      .verify(authToken, userCode)
      .then(() => {
        return this.todoRepository.find(userCode);
      })
      .catch((error) => {
        throw new Error(`${error}`);
      });
  }

  async findById(
    authToken: string,
    userCode: string,
    todoId: string
  ): Promise<TodoModel> {
    throw new Error("Method not implemented.");
  }

  async create(
    authToken: string,
    userCode: string,
    todoModel: TodoModel
  ): Promise<void> {
    return await this.verifyTokenRepository
      .verify(authToken, userCode)
      .then(() => {
        return this.todoRepository.create(userCode, todoModel);
      })
      .catch((error) => {
        throw new Error(`${error}`);
      });
  }

  async delete(authToken: string, userCode: string): Promise<void> {
    return await this.verifyTokenRepository
      .verify(authToken, userCode)
      .then(() => {
        return this.todoRepository.delete(userCode);
      })
      .catch((error) => {
        throw new Error(`${error}`);
      });
  }

  async deleteById(
    authToken: string,
    userCode: string,
    todoId: string
  ): Promise<void> {
    return await this.verifyTokenRepository
      .verify(authToken, userCode)
      .then(() => {
        return this.todoRepository.deleteById(userCode, todoId);
      })
      .catch((error) => {
        throw new Error(`${error}`);
      });
  }
}
