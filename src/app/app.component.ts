import { AppService } from './app.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/*/firebase_list_observable';*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CONTACTOS';
  contactos: any[];

  constructor ( private servicio: AppService ) { }

  ngOnInit() {
    this.servicio.getContactos()
      .subscribe(contactos => this.contactos= contactos);
  }
}
