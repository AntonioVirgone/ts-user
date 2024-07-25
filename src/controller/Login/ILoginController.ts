import { TokenModel } from "../../model/TokenModel";
import { UserModel } from "../../model/UserModel";

export interface ILoginController {
    login(user: UserModel): Promise<TokenModel>;
}