import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-confirmation',
  templateUrl: './register-confirmation.component.html',
  styleUrls: ['./register-confirmation.component.css']
})
export class RegisterConfirmationComponent implements OnInit {
  router: Router;
  constructor(_router: Router) {
    this.router = _router;
   }

  ngOnInit() {
  }

  goToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

}
