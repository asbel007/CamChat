import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppService } from './../../app.service';


@Component( {
  selector: 'admin-agregar',
  templateUrl: './agregar.component.html',
  styles: []
})
export class AgregarComponent implements OnInit {
  title= 'Agregar';
  formulario: FormGroup;
  /*
  estudianteB: any;
  @Input() appAgregar;
  @Output() cerrar = new EventEmitter();*/

  constructor( private servicio: AppService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      codSis: '',
      nombres: '',
      apellidos: '',
      correo: '',
      telefono: '',
      hora: '',
    })
  }

  onGuardar() {
    this.servicio.addEstudiante(this.formulario.value);
    alert('Agregado Satisfactoriamente');
    /*this.onCerrar();*/
  }
/*
  onCerrar() {
    this.appAgregar = null;
    this.cerrar.emit();
  }
*/
}
