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
        await this.verifyTokenRepository.verify(authToken, userCode);
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