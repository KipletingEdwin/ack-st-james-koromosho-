import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-sermons',
  templateUrl: './sermons.page.html',
  styleUrls: ['./sermons.page.scss'],
})
export class SermonsPage implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

  filterSermons(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredSermons = this.allSermons.filter(s => 
      s.title.toLowerCase().includes(query)
    );
  }


  latestSermon = {
    title: 'Walking in Faith',
    date: 'February 9, 2025',
    speaker: 'Pastor John Doe',
    videoUrl: 'https://www.youtube.com' // Example
  };

  allSermons = [
    { title: 'The Power of Prayer', date: 'Feb 2, 2025', thumbnail: 'assets/thumb1.jpg', videoUrl: '...' },
    { title: 'New Beginnings', date: 'Jan 26, 2025', thumbnail: 'assets/thumb2.jpg', videoUrl: '...' },
    // Add more sermon objects here
  ];

  filteredSermons = [...this.allSermons];

  playSermon(sermon: any) {
    this.latestSermon = sermon;
    // Optional: Scroll to top automatically when a user clicks a message
    document.querySelector('ion-content')?.scrollToTop(500);
  }

}
