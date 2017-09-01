import { HomeComponent } from './components/home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

