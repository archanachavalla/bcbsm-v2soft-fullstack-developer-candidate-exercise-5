import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Rating} from "../Rating";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RatingService {
  private url = "http://localhost:8080/userExample/rating";

  constructor(private http: HttpClient) {}

  submitRating(input: Rating):Observable<any>{
    return this.http.post(this.url, input);
  }
}
