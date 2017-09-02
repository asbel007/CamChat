
import { Component , Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/*autentificacion
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
*/
@Injectable()
export class AppService {
  estudents: FirebaseListObservable<any[]>;
  /*userAdmi: Observable<firebase.User>;*/

  constructor(private db: AngularFireDatabase ,
  /*public afAuth: AngularFireAuth*/
  ) {
    /*this.userAdmi = afAuth.authState;*/
  }

  getEstudiantes() {
    this.estudents = this.db.list('/estudiantes') as FirebaseListObservable<any[]>;
    return this.estudents;
  }

  getEstudiante(dato: string, campo: string ) {
    this.estudents = this.db.list('/estudiantes', {
      query: {
        orderByChild :  campo ,
        equalTo: dato,
        limitToFirst: 1,
      }
    }) as FirebaseListObservable<any[]>;
    return this.estudents;
  }

  getEstudiantesFiltro(dato: string, campo: string ) {
    this.estudents = this.db.list('/estudiantes', {
      query: {
        orderByChild : campo ,
        equalTo: dato
      }
    }) as FirebaseListObservable<any[]>;
    return this.estudents;
  }

  getEstudiantesOrdenar(campo: string ) {
    this.estudents = this.db.list('/estudiantes', {
      query: {
        orderByChild : campo
      }
    }) as FirebaseListObservable<any[]>;
    return this.estudents;
  }

  /*filterBy(apellido: string) {
    this.estSubject.next(apellido);
  }*/

  addEstudiante(estudianteAgregar) {
    this.estudents.push(estudianteAgregar);
  }

  updateEstudiante(clave, estudianteModificar) {
    this.estudents.update(clave, estudianteModificar);
  }

  deleteEstudiante(clave: string) {
    this.estudents.remove(clave);
  }
/*
  loginAdmi() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logoutAdmi() {
    this.afAuth.auth.signOut();
  }
*/
}
