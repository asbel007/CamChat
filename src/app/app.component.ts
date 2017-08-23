import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { SubjectSubscriber } from 'rxjs/Subject';
import { Subject } from 'rxjs/Subject';
import { FirebaseObjectObservable } from 'angularfire2/database/firebase_object_observable';
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
  title = 'CamChat';
  estudianteS: any[];
  estudianteEditar = null;
  ngAgregar = null;
  estudianteBuscar = null;
  estudianteAdmi = null;

  constructor(private servicio: AppService, db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.servicio.getEstudiantes()
      .subscribe(estudent => this.estudianteS = estudent);
  }

  onSelect(dato: string, campo: string) {
    let consulta = null;
    if (dato === '' && campo === '' || campo === '' ) {
      consulta = this.servicio.getEstudiantes();
    } else {
      if (dato === '') {
        consulta = this.servicio.getEstudiantesOrdenar(campo);
      } else {
        consulta = this.servicio.getEstudiantesFiltro(dato, campo);
      }
    }
    consulta.subscribe(estudent => { this.estudianteS = estudent });
    this.estudianteEditar = null;
  }

  onDelete(clave: string) {
    this.servicio.deleteEstudiante(clave);
  }

  /*Editar*/
  onEditar(estudiantComponent) {
    this.estudianteEditar = estudiantComponent;
  }

  closeEditar() {
    this.estudianteEditar = null;
  }

  /*Buscar*/
  onBuscar(estudiantComponent) {
    this.estudianteBuscar = estudiantComponent;
  }

  closeBuscar() {
    this.estudianteBuscar = null;
  }

  closeAgregar() {
    this.ngAgregar = null;
  }
}
