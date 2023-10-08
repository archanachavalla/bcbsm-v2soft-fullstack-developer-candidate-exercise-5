import { Component } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../User";
import {SharedService} from "../service/shared.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  message: String = "";
  isAuthenticated : boolean = false;
  user! : User;
  constructor(private userService: UserService, private sharedService: SharedService) {}

  onSubmit(user : User) {
    this.userService.getUser(user.username)
      .subscribe({
        error: (err)=> {this.message = "User not found!"},
        next: (response) => {
            this.user = response;
            this.sharedService.loggedUser = response;
            this.isAuthenticated = true;
        }
      });
  }

  logoutUser(){
    location.reload();
  }
}
