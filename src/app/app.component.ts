import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  authService: AuthService;
  isLogged : boolean;
  router: Router;

  ngOnInit() {
    this.isLogged = this.authService.checkIsLogged();
  }

  constructor(_authService: AuthService, _router: Router) {
    this.router = _router;
    this.authService = _authService;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}

