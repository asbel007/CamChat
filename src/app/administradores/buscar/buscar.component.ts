import { RouterLink } from '@angular/router';
import { AppService } from './../../app.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'admin-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  componentOpen= true;
  title= 'Busquedas';
  estudiantes: any[];
  estudianteEditar= null;
  estudianteDetalle= null;
  clave= null;
  logins= false;
  userAdmi: string;
  passAdmi: string;

  @Input() estudianteB: any = null
  @Output() cerrar = new EventEmitter();

  constructor( private servicio: AppService) {
    console.log(this.userAdmi)
  }

  ngOnInit() {
    /*TIENES QUE CORREGIR ESTA SITUACION */
    this.onRefrescar();
    if (localStorage.getItem('userAdmi') === 'admi' && localStorage.getItem('passAdmi') === '1234') {
      this.logins = true;
      console.log(localStorage.getItem('userAdmi'))
    }
  }

  onBuscar(dato: string, campo: string) {
    let consulta = null;
    if (!(dato === '')) {
        consulta = this.servicio.getEstudiantesFiltro(dato, campo);
    } else {
      alert('El campo esta vacio');
    }
    consulta.subscribe(estudiantes => this.estudiantes = estudiantes);
  }

  onRefrescar() {
    this.servicio.getEstudiantes()
      .subscribe( estudiantes => this.estudiantes = estudiantes );
  }

  onOrdenar(campo: string) {
    let consulta = null;
        consulta = this.servicio.getEstudiantesOrdenar(campo);
    consulta.subscribe(estudiantes => this.estudiantes = estudiantes);
  }

  onDetalle(datos) {
    this.estudianteDetalle = datos;
    this.componentOpen = false;
  }
  cerrarDetalle() {
    this.estudianteDetalle = null;
    this.componentOpen = true;
  }

  onEditar(datos) {
    this.estudianteEditar = datos;
    this.componentOpen = false;
  }
  cerrarEdicion() {
    this.estudianteEditar = null;
    this.componentOpen = true;
  }

  onDelete(clave) {
    let mensaje = null;
        mensaje = confirm('¿Realmente Desea Eliminarlo?');
    if (mensaje) {
      this.servicio.deleteEstudiante(clave);
      alert('Usuario Eliminado');
    }
  }

  onQR(clave) {
    this.clave = clave;
    this.componentOpen = false;
  }
  cerrarQR() {
    this.clave = null;
    this.componentOpen = true;
  }

  ingresar(user: string, pass: string) {
    if (user === 'admi' && pass === '1234') {
      this.logins = true;
      this.userAdmi = user;
      this.passAdmi = pass;
      localStorage.setItem('userAdmi', this.userAdmi);
      localStorage.setItem('passAdmi', this.passAdmi);
      console.log(localStorage.getItem('userAdmi'))
    }else {
      alert('Datos invalidos');
    }
  }
  salir() {
      this.logins = false;
      this.userAdmi = null;
      this.passAdmi = null;
      localStorage.setItem('userAdmi', this.userAdmi);
      localStorage.setItem('passAdmi', this.passAdmi);

  }
}
