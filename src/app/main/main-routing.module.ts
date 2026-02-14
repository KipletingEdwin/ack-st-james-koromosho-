import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [ 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../pages/home/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../pages/about/pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'visit',
    loadChildren: () => import('../pages/visit/visit.module').then( m => m.VisitPageModule)
  },
  {
    path: 'sermons',
    loadChildren: () => import('../pages/sermons/sermons.module').then( m => m.SermonsPageModule)
  },
  {
    path: 'ministries',
    loadChildren: () => import('../pages/ministries/ministries.module').then( m => m.MinistriesPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('../pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('../pages/donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('../pages/contacts/pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
    ]
     },
      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
