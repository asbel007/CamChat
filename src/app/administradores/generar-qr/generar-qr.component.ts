import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.component.html',
  styles: []
})
export class GenerarQrComponent implements OnInit {
  codigo= 'mi codigo';
  @Input() set fclave(valor) {
    this.codigo = valor;
    console.log(this.codigo)
  }

  @Output() cerrar = new EventEmitter();

  constructor() {
    console.log('contructor inicializado');
  }
  ngOnInit() { }

  onCancelar() {
    this.codigo = null;
    this.cerrar.emit();
  }
}
