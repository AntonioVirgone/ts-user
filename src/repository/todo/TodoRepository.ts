import axios, { AxiosRequestConfig } from "axios";
import { TodoModel } from "../../model/TodoModel";
import { TS_TODO_TOKEN } from "../../config/Secrets";
import { ITodoRepository } from "./ITodoRepository";
import { TS_TODO_BASE_PATH } from "../../config/Config";
import { TodoResponse } from "../response/todo/TodoResponse";

export class TodoRepository implements ITodoRepository {
  config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      "x-service-token": TS_TODO_TOKEN,
    },
  };

  async find(userCode: string): Promise<TodoModel[]> {
    try {
      const response = await axios.get<TodoResponse[]>(
        `${TS_TODO_BASE_PATH}/user/${userCode}`,
        this.config
      );
      return response.data.map((item) => {
        return {
          itemId: item._id,
          title: item.title,
          description: item.description,
          status: item.status,
          createdAt: item.createdAt,
        };
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  findById(userCode: string, todoId: string): Promise<TodoModel> {
    throw new Error("Method not implemented.");
  }

  async create(userCode: string, todoModel: TodoModel): Promise<void> {
    try {
      await axios.post(
        `${TS_TODO_BASE_PATH}/user/${userCode}`,
        todoModel,
        this.config
      );
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async createList(userCode: string): Promise<void> {
    try {      
      await axios.post(`${TS_TODO_BASE_PATH}/user/${userCode}/list`, {}, this.config);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async delete(userCode: string): Promise<void> {
    try {
      await axios.delete(`${TS_TODO_BASE_PATH}/user/${userCode}`, this.config);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  deleteById(userCode: string, todoId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
