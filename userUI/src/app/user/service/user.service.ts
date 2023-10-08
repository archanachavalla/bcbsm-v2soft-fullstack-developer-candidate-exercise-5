import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import {User} from "../User";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url = "http://localhost:8080/userExample/user";

  constructor(private http: HttpClient) {}

  getUser(username : String): Observable<User> {
    return this.http.get<User>(this.url + '/' + username);
  }
}
