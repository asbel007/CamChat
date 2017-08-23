import {AdminModule} from './administradores/admin.module';
import { AdmiComponent } from './components/admi/admi.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
/*
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BotonesComponent } from './components/admin/botones/botones.component';
import { MainComponent } from './components/admin/main/main.component';
import { AgregarComponent } from './components/admin/agregar/agregar.component';
import { BuscarComponent } from './components/admin/buscar/buscar.component';
import { EliminarComponent } from './components/admin/eliminar/eliminar.component';
import { EditComponent } from './components/admin/edit/edit.component';
import { DetalleComponent } from './components/admin/detalle/detalle.component';
import { AdmiComponent } from './components/admin/admi/admi.component';
import { TablasComponent } from './components/admin/tablas/tablas.component';
*/

/*
import {MaterialModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
/*import { environment } from '../environments/environment';*/
import { AppRoutingModule } from './app.router';
import { FooterComponent } from './components/footer/footer.component';

  export const firebase = {
    apiKey: 'AIzaSyD3CdifnPi3nlfYDhxwosgCZO4rksG6zAw',
    authDomain: 'camchat-419f0.firebaseapp.com',
    databaseURL: 'https://camchat-419f0.firebaseio.com',
    /*projectId: "camchat-419f0",*/
    storageBucket: 'camchat-419f0.appspot.com',
    messagingSenderId: '517227936859'
  }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AdmiComponent,
/*
    EditComponent,
    DetalleComponent,
    EliminarComponent,
    BuscarComponent,
    AgregarComponent,
    UsuarioComponent,

    BotonesComponent,
    MainComponent,
*/

  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AdminModule
    /*MaterialModule,
    BrowserAnimationsModule*/
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
