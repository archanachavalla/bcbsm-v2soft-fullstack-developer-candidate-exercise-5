import { Component } from '@angular/core';
import {SharedService} from "../service/shared.service";
import {Rating} from "../Rating";
import {RatingService} from "../service/rating.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css']
})
export class UserRatingComponent {
  ratingMessage : String = '';
  constructor(private ratingService: RatingService, private sharedService: SharedService) {
    this.form.reset();
  }

  form = new FormGroup({
    ratingNumber: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.form.valid) {
      let rating: Rating = {
        username: <string>this.sharedService.loggedUser?.username,
        ratingNumber: <any>this.form.value.ratingNumber,
        comment: <any>this.form.value.comment
      }
      this.ratingService.submitRating(rating).subscribe({
        error: (err) => {this.ratingMessage = "Something went wrong!"},
        complete: () => {this.ratingMessage = "Thank you for the feedback!"}
      })
    }
  }
}
