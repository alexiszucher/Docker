import UserRepository from "./domain/UserRepository";
import UserRepositoryImpl from "./infrastructure/UserRepositoryImpl";
import UserFinder from "./infrastructure/api/UserFinder";
import ApiUserFinder from "./infrastructure/api/ApiUserFinder";

export default class RepositoryRegistry {
  static userFinder(): UserFinder {
    return new ApiUserFinder();
  }

  static userRepository(): UserRepository {
    return new UserRepositoryImpl(this.userFinder());
  }
}
