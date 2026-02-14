import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-visit',
  templateUrl: './visit.page.html',
  styleUrls: ['./visit.page.scss'],
})
export class VisitPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openMap() {
    // Replace with your church's actual coordinates
    const address = 'ACK St James Koromosho Nakuru';
    window.open(`https://www.google.com{address}`, '_blank');
  }

}
