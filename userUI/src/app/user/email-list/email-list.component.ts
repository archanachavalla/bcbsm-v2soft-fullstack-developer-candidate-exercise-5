import {Component} from '@angular/core';
import { EmailService } from "../service/email.service";
import {Email} from "../Email";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent {
  emails: Email[] = [];
  sortedData: Email[];

  constructor(private emailService: EmailService) {
    this.sortedData = this.emails.slice();
  }

  ngOnInit(){
      this.emailService.getEmails().subscribe(response => {
        this.emails = response;
        this.sortedData = this.emails;
      });
    setTimeout(() => { this.ngOnInit() }, 1000 * 10)
  }

  sortData(sort: Sort) {
    const data = this.emails.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'toEmailId':
          return compare(a.toEmailId, b.toEmailId, isAsc);
        case 'fromEmailId':
          return compare(a.fromEmailId, b.fromEmailId, isAsc);
        case 'fileName':
          return compare(a.fileName, b.fileName, isAsc);
        case 'uploadUser':
          return compare(a.uploadUser, b.uploadUser, isAsc);
        case 'uploadDate':
          return compare(a.uploadDate, b.uploadDate, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
