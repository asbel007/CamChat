import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'admin-agregar',
  templateUrl: './agregar.component.html',
  styles: []
})
export class AgregarComponent implements OnInit, Output {
  title= 'Agregar';
  estudianteB: any;
  formulario: FormGroup;
  //@Input() appAgregar;
  @Output() cerrar = new EventEmitter();

  constructor(/* private servicio: AppService, private fb: FormBuilder*/ ) { }

  ngOnInit() {
    //this.crearFormulario();
    //console.log('componente agregar activado');
  }
/*
  crearFormulario() {
    this.formulario = this.fb.group({
      nombres: '',
      apellidos: '',
      correo: '',
      telefono: '',
      hora: '',
    })
  }

  onGuardar() {
    this.servicio.addEstudiante(this.formulario.value);
    this.onCerrar();
  }

  onCerrar() {
    this.appAgregar = null;
    this.cerrar.emit();
  }
*/
}
