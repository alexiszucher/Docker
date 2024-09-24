import ApiUser from "./ApiUser";
import User from "../../domain/User";

export default interface UserFinder {
  findUsers(): Promise<ApiUser[]>
}
