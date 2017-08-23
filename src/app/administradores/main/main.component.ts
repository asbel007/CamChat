import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  title= 'Panel de Admi';
  constructor() { }

  ngOnInit() {
  }

}
