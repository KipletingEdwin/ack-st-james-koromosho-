import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  upcomingEvents = [
    {
      title: 'Community Worship Night',
      month: 'FEB',
      day: '22',
      time: '7:00 PM - 8:30 PM',
      location: 'Main Sanctuary',
      description: 'A night of prayer and acoustic worship for the whole family.'
    },
    {
      title: 'Youth Hangout: Pizza & Games',
      month: 'FEB',
      day: '28',
      time: '6:30 PM - 9:00 PM',
      location: 'Youth Hall',
      description: 'All high schoolers welcome! Free pizza and board game tournament.'
    }
  ];

  ngOnInit() {
  }

  async register(event: any) {
    const toast = await this.toastCtrl.create({
      message: `Registration opened for ${event.title}!`,
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }

  addToCalendar(event: any) {
    console.log('Adding to local calendar...', event);
    // Logic for Capacitor Calendar plugin would go here
  }

}
