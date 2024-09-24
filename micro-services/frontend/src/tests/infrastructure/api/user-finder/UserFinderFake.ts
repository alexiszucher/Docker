import UserFinder from "../../../../infrastructure/api/UserFinder";
import ApiUser from "../../../../infrastructure/api/ApiUser";

export default class UserFinderFake implements UserFinder {
  findUsers(): Promise<ApiUser[]> {
    return Promise.resolve([
      {firstname: "Aaron", lastname: "Paul"} as ApiUser,
      {firstname: "Gerard", lastname: "Depardieu"} as ApiUser,
      {firstname: "Lana", lastname: "Del Rey"} as ApiUser
    ]);
  }
}
