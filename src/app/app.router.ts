import { HomeComponent } from './components/home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AdmiComponent } from './components/admi/admi.component';


const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdmiComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

