import axios, { AxiosRequestConfig } from "axios";
import { TodoModel } from "../../model/TodoModel";
import { ITodoRepository } from "./ITodoRepository";
import { TS_TODO_TOKEN } from "../../config/Secrets";

export class TodoRepository implements ITodoRepository {
  async find(userCode: string): Promise<TodoModel[]> {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        "x-service-token": TS_TODO_TOKEN,
      },
    };
    const response = await axios.get<TodoModel[]>(
      `http://localhost:3010/user/${userCode}`,
      config
    );
    return response.data.map((item) => {
      return {
        title: item.title,
        description: item.description,
        status: item.status,
        createdAt: item.createdAt,
      };
    });
  }

  findById(
    userCode: string,
    todoId: string
  ): Promise<TodoModel> {
    throw new Error("Method not implemented.");
  }

  create(userCode: string, todoModel: TodoModel): Promise<void> {
    throw new Error("Method not implemented.");
  }

  delete(userCode: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  deleteById(userCode: string, todoId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
