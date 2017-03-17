import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  router: Router;
  authService: AuthService;

  constructor(_router: Router, _authService: AuthService) {
    this.router = _router;
    this.authService = _authService;
  }


  canActivate() {
    this.router.events
      .subscribe(e => {
        if (e.id == 1) {
          if (e.url == '/register-confirmation') {
            this.authService.logout();
            this.router.navigateByUrl('/');
          }
          else if (e.url == '/dashboard') {
            if(!this.authService.checkIsLogged()) {
              this.router.navigateByUrl('/');
            }
          }
        }

      });
    return true;
  }
}