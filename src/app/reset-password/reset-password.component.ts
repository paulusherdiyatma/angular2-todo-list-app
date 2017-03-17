import { Component, OnInit } from '@angular/core';
import { Reset } from './reset';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  reset : Reset = new Reset();
   router: Router;
 constructor(_router: Router) {
    this.router = _router;
  }

  ngOnInit() {
  }

  onSubmit(reset) {
    alert("under construction")
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  register() {
    this.router.navigateByUrl('/register');
  }

}
