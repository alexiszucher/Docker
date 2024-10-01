import UserFinder from "./UserFinder";
import ApiUser from "./ApiUser";

export default class ApiUserFinder implements UserFinder {
  findUsers(): Promise<ApiUser[]> {
    return fetch("http://localhost:3000/users",).then(response => {
      return response.json();
    });
  }
}
