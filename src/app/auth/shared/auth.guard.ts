
import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private url: string;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.url = state.url;
    debugger;
    return true;
  }
}