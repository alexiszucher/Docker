import {describe, expect, it} from "vitest";
import UserRepository from "../../domain/UserRepository";
import UserRepositoryImpl from "../../infrastructure/UserRepositoryImpl";
import User from "../../domain/User";
import UserFinder from "../../infrastructure/api/UserFinder";
import EmptyUserFinderFake from "./api/user-finder/EmptyUserFinderFake";
import UserFinderFake from "./api/user-finder/UserFinderFake";

describe('Find users test', () => {
  it('should find users', async () => {
    const finder: UserFinder = new UserFinderFake();
    const repository: UserRepository = new UserRepositoryImpl(finder);
    let users: User[] = await repository.findUsers();
    expect(users.length).toBe(3);
  });

  it('should not find users', async () => {
    const finder: UserFinder = new EmptyUserFinderFake();
    const repository: UserRepository = new UserRepositoryImpl(finder);
    let users: User[] = await repository.findUsers();
    expect(users.length).toBe(0);
  });
});

