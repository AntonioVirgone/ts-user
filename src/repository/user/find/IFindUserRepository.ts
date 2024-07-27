import { NullableUserEntity } from "../../entity/UserEntity";

export interface IFindUserRepository {
    find(username: string, password: string): Promise<NullableUserEntity>
}