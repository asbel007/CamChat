import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  title= 'Notail';
  constructor( public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

}
