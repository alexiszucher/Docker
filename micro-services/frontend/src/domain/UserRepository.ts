import User from "./User";

export default interface UserRepository {
  findUsers(): Promise<User[]>;
}
