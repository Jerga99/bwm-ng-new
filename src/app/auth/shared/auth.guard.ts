
import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  RouterStateSnapshot, 
  Router} from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private url: string;

  constructor(
    private auth: AuthService, 
    private router: Router){}

  canActivate(_: any, state: RouterStateSnapshot) {
    this.url = state.url;
    return this.auth.isAuthenticated ? 
              this.handleAuthState() : this.handleNotAuthState();
  }

  private handleAuthState(): boolean {
    if (this.isAuthPage) {
      this.router.navigate(['/rentals']);
      return false;
    }

    return true;
  }

  private handleNotAuthState(): boolean {
    if (this.isAuthPage) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  private get isAuthPage(): boolean {
    if (this.url.includes('login') || this.url.includes('register')) {
      return true;
    }

    return false;
  }
}