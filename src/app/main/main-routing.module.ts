import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [ 


  {
    path: 'home',
    loadChildren: () => import('../pages/home/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../pages/about/pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('../pages/services/pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('../pages/projects/pages/projects/projects.module').then( m => m.ProjectsPageModule)
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
