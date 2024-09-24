import UserRepository from "../domain/UserRepository";
import User from "../domain/User";
import UserFinder from "./api/UserFinder";

export default class UserRepositoryImpl implements UserRepository {
  private _finder: UserFinder;

  constructor(finder: UserFinder) {
    this._finder = finder;
  }

  async findUsers(): Promise<User[]> {
    const apiUsers = await this._finder.findUsers();
    return apiUsers.map(apiUser => new User(apiUser.firstname, apiUser.lastname));
  }
}
