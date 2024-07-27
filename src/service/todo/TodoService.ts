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
    try {
      await this.verifyTokenRepository.verify(authToken, userCode);
      return await this.todoRepository.find(userCode);
    } catch (error) {
      throw new Error(`${error}`);
    }
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
    try {
      await this.verifyTokenRepository.verify(authToken, userCode);
      return await this.todoRepository.create(userCode, todoModel); 
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async delete(authToken: string, userCode: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async deleteById(
    authToken: string,
    userCode: string,
    todoId: string
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
