import { UserModel } from "../../model/UserModel";

export interface IRegisterService {
    register(user: UserModel): Promise<void>
}