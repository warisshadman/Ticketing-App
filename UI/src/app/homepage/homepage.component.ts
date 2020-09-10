import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  bookingSection: Boolean;
  visitorDetails: Boolean;
  constructor () { }

  ngOnInit(): void {
    this.bookingSection = true;
    this.visitorDetails = false;
  }

  proceedToVisitorDetail() {
    this.bookingSection = false;
    this.visitorDetails = true;
  }

}
