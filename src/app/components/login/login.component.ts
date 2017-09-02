import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
estudiant: any;
  estudiante= null;
  constructor( public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() { }

  login() {
    this.auth.login();
  }
  salir() {
    this.auth.logout();
  }

}
