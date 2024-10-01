import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import User from "../domain/User";
import RepositoryRegistry from "../RepositoryRegistry";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  users: User[] = [];

  constructor() {
    RepositoryRegistry.userRepository().findUsers().then((users: User[]) => {
      this.users = users;
    });
  }
}
