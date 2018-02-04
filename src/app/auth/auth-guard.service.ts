import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.isAuthenticated();
  }
}
