import { TodoModel } from "../../model/TodoModel";

export interface ITodoController {
    find(userCode: string): Promise<TodoModel[]>
    findById(userCode: string, todoId: string): Promise<TodoModel>
    create(userCode: string, todoModel: TodoModel): Promise<void>
    delete(userCode: string): Promise<void>
    deleteById(userCode: string, todoId: string): Promise<void>
}