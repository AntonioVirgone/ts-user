import { TodoModel } from "../../model/TodoModel";

export interface ITodoController {
    find(userCode: string, token: string): Promise<TodoModel[]>
    findById(userCode: string, token: string, todoId: string): Promise<TodoModel>
    create(userCode: string, token: string, todoModel: TodoModel): Promise<void>
    delete(userCode: string, token: string): Promise<void>
    deleteById(userCode: string, token: string, todoId: string): Promise<void>
}