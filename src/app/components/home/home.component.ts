//import { AppComponent } from './../../app.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  title= 'NotAil';
  @Input() estudianteH: any = null;
  @Output() cerrar = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCerrar() {
    this.cerrar.emit();
  }
}
