import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  leaders = [
    { name: 'Rev. John Doe', role: 'Senior Pastor', bio: 'Leading with grace for 15 years.', photo: 'assets/pastor.jpg' },
    { name: 'Mary Wanjiku', role: 'Assistant Pastor', bio: 'Passionate about youth and community.', photo: 'assets/assistant.jpg' },
    // ...
  ];
  

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./main'])
  }

}
