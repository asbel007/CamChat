import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {RouterStateSnapshot, ActivatedRouteSnapshot,  CanActivate,  Router} from '@angular/router';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private auth: AuthService ) { }

  canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ( this.auth.isAuthenticated() ) {
      console.log('Paso el Guard', next);
      return true;
    }else {
      console.error('Bloqueado por el Guard');
      return false;
    }
  }
}
