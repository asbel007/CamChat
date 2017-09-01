import { AuthService } from './../../services/auth.service';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  estudiant: any;
  estudiante= null;
  constructor( private servicio: AppService, public auth: AuthService) {
    auth.handleAuthentication();
   }
  ngOnInit() { }

  onIngresar(dato: string, pass2: string ) {
    let consulta = null;
    if (false) {
        /*
        dato === '' || pass2 === ''
        alert('El campo esta vacio');
        */
    } else {
      consulta = this.servicio.getEstudiante(dato, 'codSis');
        consulta.subscribe(estudiantes => this.estudiant = estudiantes);
        /*
        this.estudiante = this.estudiant;
        console.log(this.estudiante.pass);
        if (pass2 === this.estudiante.pass) {
        } else {
          this.estudiant = null;
          alert('ContraseñaIncorrecto');
        }
        */
    }
  }
  login() {
    this.auth.login();
  }
  salir() {
    this.auth.logout();
  }
}
