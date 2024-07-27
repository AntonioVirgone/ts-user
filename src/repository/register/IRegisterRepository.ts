import { UserEntity } from "../entity/UserEntity";

export interface IRegisterRepository {
    register(user: UserEntity): Promise<UserEntity>;
}