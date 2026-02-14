import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
})
export class MinistriesPage implements OnInit {

  ministries = [
    {
      title: "Children's Ministry",
      schedule: "Sundays @ 10:30 AM",
      image: "assets/ministries/kids.jpg",
      description: "A fun and safe environment for kids to learn about God's love through stories and games."
    },
    {
      title: "Youth Group",
      schedule: "Fridays @ 6:00 PM",
      image: "assets/ministries/youth.jpg",
      description: "Empowering the next generation to lead and grow in their faith together."
    },
    {
      title: "Women's Fellowship",
      schedule: "Last Saturday @ 2:00 PM",
      image: "assets/ministries/women.jpg",
      description: "Connecting women of all ages for prayer, support, and community outreach."
    },
    {
      title: "Men's Breakfast",
      schedule: "Saturdays @ 7:00 AM",
      image: "assets/ministries/men.jpg",
      description: "Building strong men of integrity through brotherhood and the Word."
    }
  ];

  contactLead(ministry: any) {
    console.log('Opening contact for:', ministry.title);
    // You can navigate to your Contact page with a subject pre-filled
  }

  constructor() { }

  ngOnInit() {
  }

}
