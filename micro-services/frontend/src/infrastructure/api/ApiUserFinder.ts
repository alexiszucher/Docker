import UserFinder from "./UserFinder";
import ApiUser from "./ApiUser";
import User from "../../domain/User";

export default class ApiUserFinder implements UserFinder {
  findUsers(): Promise<ApiUser[]> {
    return Promise.resolve([
      {firstname: "Aaron", lastname: "Paul"} as ApiUser,
      {firstname: "Gerard", lastname: "Depardieu"} as ApiUser,
      {firstname: "Lana", lastname: "Del Rey"} as ApiUser
    ]);
  }
}
