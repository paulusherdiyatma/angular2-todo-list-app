import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from './register';
import { RegisterService } from './register.service';
import { AuthService } from '../auth-service/auth.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  router: Router;
  authService: AuthService;
  isErrorOccured: boolean;
  errorMessage: string;
  registerService:RegisterService;
  register: Register = new Register();
  constructor(_router: Router, fb: FormBuilder, _registerService: RegisterService, _authService: AuthService) {
    this.registerService = _registerService;
    this.router = _router;
    this.authService = _authService;
    this.registerForm = fb.group({
      'email': [null, Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      'fullName': [null, Validators.required],
      'username': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'password': [null, Validators.required],
      'confirmPassword': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  resetPassword() {
    this.router.navigateByUrl('/reset-password');
  }

  onSubmit() {
     
    var data = {
      'username': this.registerForm.controls['username'].value,
      'email': this.registerForm.controls['email'].value,
      'password': this.registerForm.controls['password'].value
    }
   
    this.registerService.registerUser(data)
    .then(result => {
      this.isErrorOccured = false;
      this.authService.setEmailData(data.email);
      this.authService.login();
      this.router.navigateByUrl('/register-confirmation');
    })
    .catch(error => {
      this.isErrorOccured = true;
      this.errorMessage = error.message;
    })
  }
}
