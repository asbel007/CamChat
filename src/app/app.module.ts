
//import {MaterialModule} from '@angular/material';
//import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
//servicio
import { AppService } from './app.service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
/*/database.module';*/
import {AngularFireModule} from 'angularfire2';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


/*firebase*/
export const firebaseConfig={
  apiKey: "AIzaSyD3CdifnPi3nlfYDhxwosgCZO4rksG6zAw",
    authDomain: "camchat-419f0.firebaseapp.com",
    databaseURL: "https://camchat-419f0.firebaseio.com",
    /*projectId: "camchat-419f0",*/
    storageBucket: "camchat-419f0.appspot.com",
    messagingSenderId: "517227936859"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    //MaterialModule,
    //BrowserAnimationsModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
