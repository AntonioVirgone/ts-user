import { TokenModel } from "../../model/TokenModel";
import { UserModel } from "../../model/UserModel";
import { UserEntity } from "../entity/UserEntity";

export interface ILoginRepository {
    findUser(user: UserModel): Promise<UserEntity>;
    generateToken(userEntity: UserEntity): Promise<TokenModel>;
}