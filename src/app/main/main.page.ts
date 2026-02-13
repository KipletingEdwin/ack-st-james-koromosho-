import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
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
