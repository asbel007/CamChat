import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'admin-botones',
  templateUrl: './botones.component.html',
  styles: []
})
export class BotonesComponent implements OnInit, Output {
  @Output() cerrarTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCerrarComponentes() {
    this.cerrarTodo.emit();
  }
}
