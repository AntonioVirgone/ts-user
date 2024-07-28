import axios, { AxiosRequestConfig } from "axios";
import { TodoModel } from "../../model/TodoModel";
import { TS_TODO_TOKEN } from "../../config/Secrets";
import { ITodoRepository } from "./ITodoRepository";
import { TS_TODO_BASE_PATH } from "../../config/Config";
import { TodoResponse } from "../response/todo/TodoResponse";
import { TodoStatus } from "../../model/TodoStatus";

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

  async findById(userCode: string, todoId: string): Promise<TodoModel> {
    try {
      console.log(`Find item by userCode: ${userCode} and itemId: ${todoId}`);
      
      const response = await axios.get<TodoResponse>(
        `${TS_TODO_BASE_PATH}/user/${userCode}/item/${todoId}`,
        this.config
      );
      return {
        itemId: response.data._id,
        title: response.data.title,
        description: response.data.description,
        status: response.data.status,
        createdAt: response.data.createdAt,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
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
      await axios.post(
        `${TS_TODO_BASE_PATH}/user/${userCode}/list`,
        {},
        this.config
      );
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async delete(userCode: string): Promise<void> {
    await axios
      .delete(`${TS_TODO_BASE_PATH}/user/${userCode}`, this.config)
      .catch((error) => {
        throw new Error(`${error}`);
      });
  }

  async deleteById(userCode: string, todoId: string): Promise<void> {
    await axios
      .delete(
        `${TS_TODO_BASE_PATH}/user/${userCode}/item/${todoId}`,
        this.config
      )
      .catch((error) => {
        throw new Error(`${error}`);
      });
  }

  async changeStatus(
    userCode: string,
    todoId: string,
    status: TodoStatus
  ): Promise<void> {
    console.log("change status");
    
    await axios
      .patch(
        `${TS_TODO_BASE_PATH}/user/${userCode}/item/${todoId}/status/${status}`,
        this.config
      )
      .catch((error) => {
        throw new Error(`Error change status: ${error}`);
      });
  }
}
