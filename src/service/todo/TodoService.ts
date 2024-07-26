import { TodoModel } from "../../model/TodoModel";
import { TodoRepository } from "../../repository/todo/TodoRepository";
import { ITodoService } from "./ITodoService";

export class TodoService implements ITodoService {
    todoRepository = new TodoRepository();

    async find(userCode: string): Promise<TodoModel[]> {
        return await this.todoRepository.find(userCode);
    }
    
    findById(userCode: string, todoId: string): Promise<TodoModel> {
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