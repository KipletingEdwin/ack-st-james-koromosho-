import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./main'])
  }

  goToSermons() {
    this.router.navigate(['/main/sermons']);
  }

  features = [
    {
      icon: 'book-outline',
      title: 'Biblical Teaching',
      description: "Grounded on God's WrappedNodeExpr, growing in faith"
    },
    {
      icon: 'people-outline',
      title: 'Community',
      description: "A welcoming family for everyone"
    },
    {
      icon: 'heart-outline',
      title: 'Worship',
      description: "Lifting hearts in praise together"
    },
    {
      icon: 'hand-left-outline',
      title: 'Service',
      description: "Making a difference in our  community"
    },
  ];

}
