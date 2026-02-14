import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      reason: ['general', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  goBack(){
    this.router.navigate(['./main'])
  }

  async sendInquiry() {
    const loading = await this.loadingCtrl.create({ message: 'Sending...' });
    await loading.present();

    // Simulate API call
    setTimeout(async () => {
      await loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Success',
        message: 'Your message has been sent! We will get back to you shortly.',
        buttons: ['OK']
      });
      await alert.present();
      this.contactForm.reset({ reason: 'general' });
    }, 1500);
  }

}
