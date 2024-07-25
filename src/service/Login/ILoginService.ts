import { TokenModel } from "../../model/TokenModel";
import { UserModel } from "../../model/UserModel";

export interface ILoginService {
    login(user: UserModel): Promise<TokenModel>;
}