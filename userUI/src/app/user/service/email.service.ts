import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import { Email } from "../Email";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  private url = "http://localhost:8080/userExample/email";

  constructor(private http: HttpClient) {}

  getEmails(): Observable<Email[]> {
    return this.http.get<Email[]>(this.url);
  }

  sendEmail(input: Email): Observable<any>{
    return this.http.post(this.url + '/attachment', input);
  }
}
