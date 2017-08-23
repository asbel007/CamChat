import { Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AppService{
  contactos: FirebaseListObservable<any[]>;
  constructor (private af: AngularFireDatabase ){}
  getContactos() {
    this.contactos = this.af.list('/contactos') as FirebaseListObservable<any[]>;
    return this.contactos;
  }
}
