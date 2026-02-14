import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Replace this with your actual giving link
  GIVING_URL = 'https://your-church-giving-portal.com';


  openGivingPortal() {
    // Opens the link in a new tab/browser window
    window.open(this.GIVING_URL, '_blank');
  }

}
