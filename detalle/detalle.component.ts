import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'admin-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {
  @Input() estudianteDetalle: any = null;
  @Output() cerrar = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCerrar() {
    this.cerrar.emit();
  }

}
