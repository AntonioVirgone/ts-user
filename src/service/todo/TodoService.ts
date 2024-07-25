import { TodoModel } from "../../model/TodoModel";
import { TodoRepository } from "../../repository/todo/TodoRepository";
import { ITodoService } from "./ITodoService";

export class TodoService implements ITodoService {
    todoRepository = new TodoRepository();

    async find(userCode: string, token: string): Promise<TodoModel[]> {
        return await this.todoRepository.find(userCode, token);
    }
    
    findById(userCode: string, token: string, todoId: string): Promise<TodoModel> {
        throw new Error("Method not implemented.");
    }
    
    create(userCode: string, token: string, todoModel: TodoModel): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    delete(userCode: string, token: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    deleteById(userCode: string, token: string, todoId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}