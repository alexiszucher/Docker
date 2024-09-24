import UserFinder from "../../../../infrastructure/api/UserFinder";
import ApiUser from "../../../../infrastructure/api/ApiUser";

export default class EmptyUserFinderFake implements UserFinder {
  findUsers(): Promise<ApiUser[]> {
    return Promise.resolve([]);
  }
}
