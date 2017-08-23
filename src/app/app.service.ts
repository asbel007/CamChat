import { Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AppService {
  estudents: FirebaseListObservable<any[]>;

  constructor (private db: AngularFireDatabase ) {}

  getEstudiantes() {
    this.estudents = this.db.list('/estudiantes') as FirebaseListObservable<any[]>;
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

  updateEstudiante(clave, estudianteElim) {
    this.estudents.update(clave, estudianteElim);
  }

  deleteEstudiante(clave: string) {
    this.estudents.remove(clave);
  }

}
