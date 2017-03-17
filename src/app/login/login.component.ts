import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login = new Login();
  router: Router;
  authService: AuthService;

  ngOnInit() {

  }

  constructor(_router: Router, fb: FormBuilder, _authService: AuthService) {
    this.authService = _authService;
    this.router = _router;
    this.loginForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      'password': [null, Validators.required]
    });
  }

  onSubmit(login) {
   this.authService.login();
  }

  resetPassword() {
    this.router.navigateByUrl('/reset-password');
  }

  register() {
    this.router.navigateByUrl('/register');
  }

}
