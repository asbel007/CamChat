import { AppService } from './../../app.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  styles: []
})

export class EditComponent implements OnInit {

  title= 'Editar';
  formulario: FormGroup;
  estudianteOriginal: any;

  @Input() set estudianteEdicion(valor) {
    this.crearFormulario();
    if (valor) {
      this.estudianteOriginal = valor;
      this.formulario.patchValue({
        nombres: valor.nombres,
        apellidos: valor.apellidos,
        telefono: valor.telefono,
        correo: valor.correo,
        hora: valor.hora,
      });
    }
  }

  @Output() cerrar = new EventEmitter();

  constructor(private servicio: AppService, private fb: FormBuilder) { }

  ngOnInit() {
    this.crearFormulario();
  }

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
    this.servicio.updateEstudiante(this.estudianteOriginal.$key, this.formulario.value);
    this.onCancelar();
  }

  onCancelar() {
    this.estudianteOriginal = null;
    this.cerrar.emit();
  }
}
