import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { RegisterService } from './register/register.service';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { AuthService } from './auth-service/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    DocumentationComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    DashboardComponent,
    RegisterConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ReactiveFormsModule
  ],
  providers: [RegisterService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
