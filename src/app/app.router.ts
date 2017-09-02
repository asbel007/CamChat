import { GenerarQrComponent } from './administradores/generar-qr/generar-qr.component';
import { AuthguardService } from './services/authguard.service';
import { HomeComponent } from './components/home/home.component';

import {Routes,  RouterModule,  CanActivate} from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  /*{ path: '', component: HomeComponent },*/
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: UsuarioComponent,
    canActivate: [ AuthguardService],
    children: [
      {path: 'generarqr', component: GenerarQrComponent}
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  /*{ path: '**', component: HomeComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

