import { UserModel } from "../../model/UserModel";
import { Predicate } from "./Predicate";

const isEmpty: Predicate<string> = (item) => item === undefined || item == "";
export const isUserValid: Predicate<UserModel> = (userModel) =>
  !(isEmpty(userModel.username) && isEmpty(userModel.password));
