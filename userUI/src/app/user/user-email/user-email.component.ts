import {Component} from '@angular/core';
import {EmailService} from "../service/email.service";
import {SharedService} from "../service/shared.service";

@Component({
  selector: 'app-user-email',
  templateUrl: './user-email.component.html',
  styleUrls: ['./user-email.component.css']
})
export class UserEmailComponent {
  message : String = '';
  constructor(private emailService: EmailService, private sharedService: SharedService) {}

  onSubmit(data:any) {
    data.uploadUser = this.sharedService.loggedUser?.username;
    this.emailService.sendEmail(data).subscribe({
      error: (err) => {this.message = "Something went wrong!"},
      complete: () => {this.message = "Email Sent Successfully!"}
    })
  }
}
