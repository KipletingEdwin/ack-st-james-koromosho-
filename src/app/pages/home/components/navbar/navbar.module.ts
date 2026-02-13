import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavbarComponent } from './navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterLink, RouterLinkActive],
  declarations: [NavbarComponent ],
  exports: [NavbarComponent ]
})
export class NavbarComponentModule {}
