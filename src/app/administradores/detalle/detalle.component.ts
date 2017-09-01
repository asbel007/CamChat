import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {
  estudianteDetalle: any;

  @Input() detalle: any = null;
  @Output() cerrar = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onCerrar() {
    this.cerrar.emit();
  }

  onVolver() {
    this.estudianteDetalle = null;
    this.cerrar.emit();
  }
}
