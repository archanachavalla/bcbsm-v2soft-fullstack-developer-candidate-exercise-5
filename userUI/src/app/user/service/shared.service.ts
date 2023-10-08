import {Injectable} from "@angular/core";
import {User} from "../User";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  loggedUser: User | undefined;
}
